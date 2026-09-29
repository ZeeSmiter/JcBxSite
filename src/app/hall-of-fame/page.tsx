import { getMemberOfTheWeek, getHallOfFame } from "@/lib/sheet-feed";

export default async function HallOfFamePage() {
  const [memberOfTheWeek, hallOfFame] = await Promise.all([
    getMemberOfTheWeek(),
    getHallOfFame(),
  ]);
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Hall of Fame</h1>
      <p className="text-muted">Morale piece — recognition, not raw week-to-week numbers.</p>

      <section className="rounded-xl border border-accent/40 bg-surface-2 p-6">
        <p className="text-xs uppercase tracking-wide text-accent mb-1">Member of the Week</p>
        <h2 className="text-xl font-semibold">{memberOfTheWeek.member}</h2>
        <p className="text-muted">{memberOfTheWeek.detail}</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {hallOfFame.map((h, i) => (
          <div key={i} className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold">{h.member}</h3>
            <p className="text-accent-2 text-sm">{h.headline}</p>
            {h.detail && <p className="text-muted text-sm mt-1">{h.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
