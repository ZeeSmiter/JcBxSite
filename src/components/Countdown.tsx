"use client";

import { useEffect, useState } from "react";
import type { AllianceEvent } from "@/lib/data";

// How many upcoming events the box shows at once.
const MAX_EVENTS = 4;

function timeParts(msLeft: number) {
  if (msLeft <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const s = Math.floor(msLeft / 1000) % 60;
  const m = Math.floor(msLeft / (1000 * 60)) % 60;
  const h = Math.floor(msLeft / (1000 * 60 * 60)) % 24;
  const d = Math.floor(msLeft / (1000 * 60 * 60 * 24));
  return { d, h, m, s };
}

// Compact form for the secondary rows: "3d 12h 05m" / "12h 05m 30s" / "05m 30s".
function shortForm(msLeft: number) {
  const { d, h, m, s } = timeParts(msLeft);
  const pad = (n: number) => String(n).padStart(2, "0");
  if (d > 0) return `${d}d ${pad(h)}h ${pad(m)}m`;
  if (h > 0) return `${h}h ${pad(m)}m ${pad(s)}s`;
  return `${m}m ${pad(s)}s`;
}

function byStart(a: AllianceEvent, b: AllianceEvent) {
  return new Date(a.start).getTime() - new Date(b.start).getTime();
}

// The soonest events that haven't started yet, as of `nowMs`.
function upcomingEvents(events: AllianceEvent[], nowMs: number): AllianceEvent[] {
  return events
    .filter((e) => new Date(e.start).getTime() > nowMs)
    .sort(byStart)
    .slice(0, MAX_EVENTS);
}

// Takes the full event list so that when one event's timer hits zero the box
// rolls the next one up on its own, without waiting for a rebuild.
export default function Countdown({ events }: { events: AllianceEvent[] }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // Both updates happen inside callbacks: the rAF paints the real clock on
    // the very next frame (so there's no visible delay), the interval keeps it
    // ticking. Nothing sets state directly in the effect body.
    const raf = requestAnimationFrame(() => setNow(Date.now()));
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  // Before mount there is no clock to compare against, so fall back to the
  // earliest events by start time. That is deterministic on both the server
  // and the client (no hydration mismatch); the first tick after mount swaps
  // in the properly time-filtered list.
  const list =
    now === null ? [...events].sort(byStart).slice(0, MAX_EVENTS) : upcomingEvents(events, now);

  if (list.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6">
        <p className="text-muted">No upcoming events scheduled — add one to the alliance calendar.</p>
      </div>
    );
  }

  const [next, ...rest] = list;
  const nextMsLeft = now !== null ? new Date(next.start).getTime() - now : null;
  const { d, h, m, s } = timeParts(nextMsLeft ?? 0);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="text-xs uppercase tracking-wide text-accent-2 mb-1">{next.type}</p>
      <h3 className="text-xl font-semibold mb-4 glow-text">{next.title}</h3>

      {nextMsLeft !== null ? (
        <div className="flex gap-4 font-mono text-3xl">
          <Unit value={d} label="days" />
          <Unit value={h} label="hrs" />
          <Unit value={m} label="min" />
          <Unit value={s} label="sec" />
        </div>
      ) : (
        <div className="h-9" />
      )}

      {next.notes && <p className="text-sm text-muted mt-4">{next.notes}</p>}

      {rest.length > 0 && (
        <div className="mt-5 pt-4 border-t border-border">
          <p className="text-xs uppercase tracking-wide text-muted/70 mb-2">Then</p>
          <ul className="space-y-2">
            {rest.map((e) => {
              const msLeft = now !== null ? new Date(e.start).getTime() - now : null;
              return (
                <li key={e.id} className="flex items-baseline justify-between gap-3">
                  <span className="min-w-0">
                    <span className="text-sm font-medium truncate">{e.title}</span>
                    <span className="block text-[10px] uppercase tracking-wide text-accent-2">
                      {e.type}
                    </span>
                  </span>
                  <span className="font-mono text-sm text-muted whitespace-nowrap">
                    {msLeft !== null ? shortForm(msLeft) : "—"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div>{String(value).padStart(2, "0")}</div>
      <div className="text-[10px] uppercase tracking-wide text-muted font-sans">{label}</div>
    </div>
  );
}
