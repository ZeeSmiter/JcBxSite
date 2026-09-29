import Ticker from "@/components/Ticker";
import { getJuiceboxHeroes, getHeroWeekLabel, getHallOfFame } from "@/lib/sheet-feed";

export default async function StatsPage() {
  const [juiceboxHeroes, heroWeekLabel, hallOfFame] = await Promise.all([
    getJuiceboxHeroes(),
    getHeroWeekLabel(),
    getHallOfFame(),
  ]);
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Alliance Stats</h1>
      <p className="text-muted max-w-2xl">
        Public performance highlights — rank movement and recognition, not raw numbers.
        Full weekly VS, donation, and kill data is available to members through the
        private dashboard (coming soon).
      </p>

      <Ticker items={juiceboxHeroes} weekLabel={heroWeekLabel} />

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold mb-4">Top Recognition</h2>
        <ul className="space-y-3">
          {hallOfFame.map((h, i) => (
            <li key={i} className="flex justify-between gap-4 border-b border-border last:border-0 pb-3 last:pb-0">
              <span className="font-medium">{h.member}</span>
              <span className="text-muted text-sm text-right">{h.headline}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
