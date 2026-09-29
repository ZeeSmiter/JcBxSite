"use client";

// Formats an event's ISO datetime in the *viewer's* browser timezone.
// Server-rendered `toLocaleString()` would use the server's clock (UTC on
// Vercel) instead, which is why times were showing 4 hours off.
export default function EventTime({ iso }: { iso: string }) {
  return (
    <>{new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</>
  );
}
