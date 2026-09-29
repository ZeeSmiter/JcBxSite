import Link from "next/link";

export const metadata = {
  title: "Pre-Season 3 Black Market Priority Guide | JcBx",
};

const TIERS = [
  {
    grade: "S",
    label: "Always",
    tone: "border-accent/60 bg-surface-2",
    badge: "bg-accent text-background",
    items: [
      <>Free slot every refresh, every day.</>,
      <>
        <span className="text-foreground font-medium">Exclusive Weapon Shard Choice Chests</span> —
        discount first. Full price if they still need the 50 named shards to unlock their main-type
        weapon. Pick <span className="text-foreground">only</span> the hero that matches their squad.
      </>,
      <>
        <span className="text-foreground font-medium">Gorilla Overlord items</span> if they appear
        (shards, Bond Badges, Training Certificates). Scarce and alliance-wide useful once Overlord is
        in the game. Discounted first.
      </>,
    ],
  },
  {
    grade: "A",
    label: "Buy on discount; full price only if S is funded",
    tone: "border-accent-2/50 bg-surface",
    badge: "bg-accent-2 text-background",
    items: [
      <>Decorations they don&rsquo;t own, or still below Lv3</>,
      <>Universal decoration components if deco levels are behind</>,
      <>Legendary / Mythic gear blueprints on discount</>,
      <>
        UR / universal hero shards for a hero they actually field (Scarlett is relevant for a lot of
        accounts going into S3)
      </>,
    ],
  },
  {
    grade: "B",
    label: "Only after S and A",
    tone: "border-border bg-surface",
    badge: "bg-surface-2 text-muted border border-border",
    items: [
      <>UR skill-chip choice chests</>,
      <>Drone chip / component chests</>,
      <>
        Universal Exclusive Weapon shards — good <em>after</em> the 50 named unlock. They cannot replace
        named shards for the unlock itself.
      </>,
    ],
  },
  {
    grade: "C",
    label: "Skip — and the alliance should say this out loud",
    tone: "border-border bg-surface opacity-90",
    badge: "bg-surface-2 text-muted/70 border border-border",
    items: [
      <>Food / iron / gold chests</>,
      <>Speedups</>,
      <>Skill medals / valor badges</>,
      <>Full-price ore / ceramic</>,
      <>Random bundles</>,
      <>Named shards for a troop type they do not play</>,
    ],
  },
];

export default function BlackMarketPriorityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div>
        <Link href="/wiki" className="text-sm text-accent-2 hover:underline">
          ← Back to Wiki
        </Link>
        <h1 className="text-3xl font-bold mt-3">Pre-Season 3 Black Market Priority Guide</h1>
        <p className="text-muted mt-2">
          What to buy — and what to ignore — in the Celebration Black Market before Season 3. The short
          version: weapons and Overlord materials are the only spends that still matter once S3 starts.
        </p>
      </div>

      <section className="rounded-xl border border-accent/40 bg-surface-2 p-6 space-y-3 text-sm text-muted leading-relaxed">
        <h2 className="text-xl font-semibold text-foreground">Alliance rule: one plan, three troop types</h2>
        <p>
          Tell members: <span className="text-foreground font-medium">fund your main type&rsquo;s
          Exclusive Weapon first.</span> Do not split named shards across Tank / Air / Missile
          &ldquo;just in case.&rdquo;
        </p>
        <p>
          S2 Celebration chests are typically <span className="text-foreground">Murphy / Carlie /
          Swift</span> — 50 named shards to unlock each weapon. After unlock, named or universal shards
          level it.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left border-b border-border pb-2 pr-6 text-xs uppercase tracking-wide text-muted/70 font-medium">
                  Main type
                </th>
                <th className="text-left border-b border-border pb-2 text-xs uppercase tracking-wide text-muted/70 font-medium">
                  Named shards go to
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tank", "Murphy"],
                ["Aircraft", "Carlie"],
                ["Missile", "Swift"],
              ].map(([type, hero]) => (
                <tr key={type}>
                  <td className="border-b border-border py-2 pr-6 text-foreground font-medium">{type}</td>
                  <td className="border-b border-border py-2 text-accent-2 font-medium">{hero}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          If the live shop already shows{" "}
          <span className="text-foreground">Marshall / Schuyler / McGregor</span>, use that
          season&rsquo;s matching hero instead. Check the chest tooltip before anyone spends.
        </p>

        <p className="rounded-lg border border-accent/40 bg-surface px-3 py-2 font-medium text-accent">
          Level 20 on one weapon is worth more than three unlocked sticks at level 3.
        </p>
      </section>

      <div>
        <h2 className="text-xl font-semibold mb-4">Priority list (everyone)</h2>
        <div className="space-y-4">
          {TIERS.map((tier) => (
            <section key={tier.grade} className={`rounded-xl border p-5 ${tier.tone}`}>
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-bold text-sm ${tier.badge}`}
                >
                  {tier.grade}
                </span>
                <h3 className="font-semibold">{tier.label}</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted leading-relaxed">
                {tier.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="text-sm text-muted mt-4">
          Those C-tier items are farmable. EW chests and Overlord badges are not.
        </p>
      </div>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold mb-1">Quick buy test</h2>
        <p className="text-xs uppercase tracking-wide text-accent-2 mb-3">Pin this</p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-3">
            <span className="text-accent font-semibold shrink-0">Buy</span>
            <span className="text-muted">Free? Take it.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-semibold shrink-0">Buy</span>
            <span className="text-muted">Named EW shards for my squad type.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-semibold shrink-0">Buy</span>
            <span className="text-muted">Gorilla material on sale.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted/60 font-semibold shrink-0">Skip</span>
            <span className="text-muted">
              Can Honor Shop / VS / radar give me this the same week?
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted/60 font-semibold shrink-0">Skip</span>
            <span className="text-muted">
              Second troop type&rsquo;s weapon before my first is unlocked.
            </span>
          </li>
        </ul>
      </section>

      <p className="text-sm text-muted border-t border-border pt-4">
        Weapons and Overlord materials are the only Black Market spends that still matter when Season 3
        starts. Everything else is optional.
      </p>
    </div>
  );
}
