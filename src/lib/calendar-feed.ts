// ---------------------------------------------------------------------------
// Live feed from Corbett's private Google Calendar (secret iCal address).
//
// This is the primary source for the Calendar page and landing-page
// countdown. If it's unreachable, callers fall back to the Google Sheet
// feed, then to the static placeholder data — the site never breaks.
// ---------------------------------------------------------------------------

import type { AllianceEvent } from "./data";

const ICS_URL = process.env.CALENDAR_ICS_URL;

function guessType(summary: string): AllianceEvent["type"] {
  const s = summary.toLowerCase();
  if (s.includes("server war") || s.includes(" war")) return "Server War";
  if (s.includes("black market")) return "Black Market";
  if (s.includes("rally")) return "Rally";
  if (s.includes("season")) return "Season";
  return "Alliance";
}

// Unescape iCal text (commas, semicolons, newlines, backslashes).
function unescapeIcs(text: string): string {
  return text
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\");
}

// Parses a DTSTART value into an ISO datetime string.
// Handles: UTC ("...Z"), all-day (VALUE=DATE), and floating/local times
// (assumed to be in Corbett's timezone, America/New_York, since that's
// the calendar's default — DST-aware offset not accounted for).
function parseIcsDate(value: string, params: string): string | null {
  const isDateOnly = params.includes("VALUE=DATE");
  const m = value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2}))?(Z)?$/);
  if (!m) return null;
  const [, y, mo, d, h = "00", mi = "00", s = "00", z] = m;
  if (isDateOnly) {
    return `${y}-${mo}-${d}T00:00:00-04:00`;
  }
  if (z) {
    return `${y}-${mo}-${d}T${h}:${mi}:${s}Z`;
  }
  // Floating/TZID time — assume Eastern.
  return `${y}-${mo}-${d}T${h}:${mi}:${s}-04:00`;
}

// Unfolds iCal line continuations (a leading space/tab means "continued
// from the previous line") and splits into lines.
function unfoldLines(text: string): string[] {
  const raw = text.split(/\r\n|\n|\r/);
  const lines: string[] = [];
  for (const line of raw) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && lines.length > 0) {
      lines[lines.length - 1] += line.slice(1);
    } else {
      lines.push(line);
    }
  }
  return lines;
}

function parseIcs(text: string): AllianceEvent[] {
  const lines = unfoldLines(text);
  const events: AllianceEvent[] = [];
  let cur: Record<string, string> | null = null;
  let i = 0;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      cur = {};
      continue;
    }
    if (line === "END:VEVENT") {
      if (cur && cur.SUMMARY && cur.DTSTART) {
        const start = parseIcsDate(cur.DTSTART, cur.DTSTART_PARAMS ?? "");
        if (start) {
          events.push({
            id: `cal-${i++}`,
            title: unescapeIcs(cur.SUMMARY),
            type: guessType(cur.SUMMARY),
            start,
            notes: cur.DESCRIPTION ? unescapeIcs(cur.DESCRIPTION) : undefined,
          });
        }
      }
      cur = null;
      continue;
    }
    if (!cur) continue;

    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx);
    const value = line.slice(colonIdx + 1);
    const [name, ...paramParts] = key.split(";");

    if (name === "SUMMARY") cur.SUMMARY = value;
    if (name === "DESCRIPTION") cur.DESCRIPTION = value;
    if (name === "DTSTART") {
      cur.DTSTART = value;
      cur.DTSTART_PARAMS = paramParts.join(";");
    }
  }

  return events;
}

let cache: { at: number; events: AllianceEvent[] } | null = null;
const CACHE_MS = 60 * 60 * 1000; // 1 hour, matches page-level ISR revalidate

export async function getCalendarEvents(): Promise<AllianceEvent[] | null> {
  if (!ICS_URL) return null;
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.events;

  try {
    const res = await fetch(ICS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const text = await res.text();
    const events = parseIcs(text);
    cache = { at: Date.now(), events };
    return events;
  } catch {
    return null;
  }
}
