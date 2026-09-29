import type { JuiceboxHero } from "@/lib/data";

export default function Ticker({ items, weekLabel }: { items: JuiceboxHero[]; weekLabel?: string | null }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="text-sm uppercase tracking-wide text-muted mb-4">
        Juicebox Heroes{weekLabel ? ` — ${weekLabel}` : ""}
      </h3>
      <ul className="space-y-3">
        {items.map((h, i) => (
          <li key={i} className="flex items-baseline justify-between gap-3 border-b border-border last:border-0 pb-3 last:pb-0">
            <span className="text-accent-2 text-sm">{h.superlative}</span>
            <span className="font-medium">{h.commander}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
