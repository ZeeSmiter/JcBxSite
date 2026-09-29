import { getEvents } from "@/lib/sheet-feed";
import EventTime from "@/components/EventTime";

export default async function CalendarPage() {
  const events = await getEvents();
  const sorted = [...events].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Event Calendar</h1>
      <p className="text-muted">Server wars, black market windows, and rally times — shown in your local timezone.</p>
      <ul className="space-y-3">
        {sorted.map((e) => (
          <li key={e.id} className="rounded-xl border border-border bg-surface p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-accent-2">{e.type}</p>
              <p className="font-semibold">{e.title}</p>
              {e.notes && <p className="text-sm text-muted">{e.notes}</p>}
            </div>
            <p className="font-mono text-sm text-muted whitespace-nowrap">
              <EventTime iso={e.start} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
