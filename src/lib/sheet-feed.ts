// ---------------------------------------------------------------------------
// Live feed from the "JcBx Site Feed" Google Sheet.
//
// Corbett updates this Sheet (sourced from his local VS Data workbook, the
// real source of truth). The site fetches its published CSV export on a
// revalidation interval (ISR) so it stays current without a rebuild/deploy.
// If the fetch fails for any reason (offline, not yet shared publicly, sheet
// restructured), every consumer below falls back to the static placeholder
// data in `data.ts` so the site never breaks.
// ---------------------------------------------------------------------------

import { events as staticEvents, juiceboxHeroes as staticHeroes, memberOfTheWeek as staticMemberOfWeek, leadershipStructure as staticLeadershipStructure, hallOfFame as staticHallOfFame, faqs as staticFaqs } from "./data";
import type { AllianceEvent, JuiceboxHero, RosterHighlight, LeadershipRole, FAQItem } from "./data";
import { getCalendarEvents } from "./calendar-feed";

const SHEET_ID = "YOUR_SHEET_ID_HERE";

// Fetch by tab NAME, not gid — gid=0 doesn't reliably exist (Google names
// the first auto-converted tab "Untitled", not gid 0), and fetching by
// name also means Corbett can add/rename tabs without breaking anything
// except the one tab whose name actually changed.
function namedTabCsvUrl(sheetName: string): string {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

const MAIN_TAB_NAME = "Juicebox Heros";
const CSV_URL = namedTabCsvUrl(MAIN_TAB_NAME);

type FeedRow = {
  type: string;
  title: string;
  subtitle: string;
  detail: string;
  datetime: string;
};

// Minimal CSV parser (handles quoted fields with embedded commas).
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

async function fetchFeedRows(): Promise<FeedRow[] | null> {
  try {
    const res = await fetch(CSV_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const text = await res.text();
    const [header, ...rest] = parseCsv(text);
    if (!header) return null;
    return rest.map((r) => ({
      type: (r[0] ?? "").trim(),
      title: (r[1] ?? "").trim(),
      subtitle: (r[2] ?? "").trim(),
      detail: (r[3] ?? "").trim(),
      datetime: (r[4] ?? "").trim(),
    }));
  } catch {
    return null;
  }
}

// Drops events that started more than a day ago, so past server wars/rallies
// fall off the Calendar page and the countdown instead of listing forever.
const EVENT_DROP_OFF_MS = 24 * 60 * 60 * 1000;
function dropExpired(events: AllianceEvent[]): AllianceEvent[] {
  const cutoff = Date.now() - EVENT_DROP_OFF_MS;
  return events.filter((e) => new Date(e.start).getTime() > cutoff);
}

export async function getEvents(): Promise<AllianceEvent[]> {
  // Primary source: Corbett's Google Calendar (secret iCal feed).
  const fromCalendar = await getCalendarEvents();
  if (fromCalendar && fromCalendar.length > 0) return dropExpired(fromCalendar);

  // Fallback: hand-entered "event" rows in the Google Sheet.
  const rows = await fetchFeedRows();
  if (rows) {
    const fromSheet = rows
      .filter((r) => r.type === "event" && r.datetime)
      .map((r, i) => ({
        id: `sheet-${i}`,
        title: r.title,
        type: (r.subtitle || "Alliance") as AllianceEvent["type"],
        start: r.datetime,
        notes: r.detail || undefined,
      }));
    if (fromSheet.length > 0) return dropExpired(fromSheet);
  }

  // Last resort: static placeholder data.
  return dropExpired(staticEvents);
}

export async function getJuiceboxHeroes(): Promise<JuiceboxHero[]> {
  const rows = await fetchFeedRows();
  if (!rows) return staticHeroes;
  const fromSheet = rows
    .filter((r) => r.type === "hero")
    .map((r) => ({
      superlative: r.title,
      commander: r.subtitle,
    }));
  return fromSheet.length > 0 ? fromSheet : staticHeroes;
}

// Which week's data the superlatives above were pulled from (e.g.
// "S2 WEEK 6") — a single "week" row in the main feed tab, written by
// generate_site_feed.py alongside the hero rows. Returns null if that row
// isn't present (older sheet exports, or a manual edit that removed it).
export async function getHeroWeekLabel(): Promise<string | null> {
  const rows = await fetchFeedRows();
  if (!rows) return null;

  // Preferred: a dedicated "week" row (what generate_site_feed.py writes).
  const weekRow = rows.find((r) => r.type === "week");
  if (weekRow?.title) return weekRow.title;

  // Also accepted: the label written into a "hero" row's datetime column
  // (handy for a quick manual edit — no extra row needed).
  const heroWithLabel = rows.find((r) => r.type === "hero" && r.datetime);
  return heroWithLabel?.datetime || null;
}

export async function getMemberOfTheWeek(): Promise<RosterHighlight> {
  // Primary source: the hand-edited "Member of the Week" tab in the Sheet
  // (a separate tab so Corbett can update it directly, no script needed).
  try {
    const res = await fetch(namedTabCsvUrl("Member of the Week"), { next: { revalidate: 3600 } });
    if (res.ok) {
      const text = await res.text();
      const [, dataRow] = parseCsv(text);
      const commander = dataRow?.[0]?.trim();
      const note = dataRow?.[1]?.trim();
      if (commander) {
        return { member: commander, headline: "Member of the Week", detail: note || undefined };
      }
    }
  } catch {
    // fall through to the other sources below
  }

  // Fallback: the auto-computed "memberweek" row in the main feed tab.
  const rows = await fetchFeedRows();
  if (rows) {
    const row = rows.find((r) => r.type === "memberweek");
    if (row) return { member: row.title, headline: row.subtitle, detail: row.detail };
  }

  // Last resort: static placeholder data.
  return staticMemberOfWeek;
}

export async function getLeadershipStructure(): Promise<LeadershipRole[]> {
  // Live source: the "LEADERS - How We Operate" tab, columns "Leader" and
  // "Role" (one row per person; a role can have multiple leaders). Corbett
  // edits this tab directly to reassign roles, no script needed.
  try {
    const res = await fetch(namedTabCsvUrl("LEADERS - How We Operate"), { next: { revalidate: 3600 } });
    if (res.ok) {
      const text = await res.text();
      const [, ...dataRows] = parseCsv(text);
      const byRole = new Map<string, string[]>();
      for (const row of dataRows) {
        const leader = row[0]?.trim();
        const role = row[1]?.trim();
        if (!leader || !role) continue;
        const list = byRole.get(role) ?? [];
        list.push(leader);
        byRole.set(role, list);
      }
      if (byRole.size > 0) {
        return staticLeadershipStructure.map((r) => ({
          ...r,
          owners: byRole.get(r.title) ?? r.owners ?? [],
        }));
      }
    }
  } catch {
    // fall through to the static structure below
  }

  return staticLeadershipStructure;
}

export async function getHallOfFame(): Promise<RosterHighlight[]> {
  // Live source: the "Hall of Fame" tab, columns "commander" and "note".
  // Corbett edits this tab directly to add/retire entries, no script needed.
  try {
    const res = await fetch(namedTabCsvUrl("Hall of Fame"), { next: { revalidate: 3600 } });
    if (res.ok) {
      const text = await res.text();
      const [, ...dataRows] = parseCsv(text);
      const fromSheet = dataRows
        .map((row) => ({
          member: row[0]?.trim() ?? "",
          headline: row[1]?.trim() ?? "",
        }))
        .filter((h) => h.member);
      if (fromSheet.length > 0) return fromSheet;
    }
  } catch {
    // fall through to the static list below
  }

  return staticHallOfFame;
}

export async function getFaqs(): Promise<FAQItem[]> {
  // Live source: the "FAQ" tab, columns "Question" and "Answer". Corbett
  // edits this tab directly to add/update questions, no script needed.
  try {
    const res = await fetch(namedTabCsvUrl("FAQ"), { next: { revalidate: 3600 } });
    if (res.ok) {
      const text = await res.text();
      const [, ...dataRows] = parseCsv(text);
      const fromSheet = dataRows
        .map((row) => ({
          question: row[0]?.trim() ?? "",
          answer: row[1]?.trim() ?? "",
        }))
        .filter((f) => f.question && f.answer);
      if (fromSheet.length > 0) return fromSheet;
    }
  } catch {
    // fall through to the static list below
  }

  return staticFaqs;
}
