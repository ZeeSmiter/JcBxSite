import Link from "next/link";

export const metadata = {
  title: "Chip Upgrade Priorities | JcBx",
};

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-surface p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-xs uppercase tracking-wide text-accent-2 mt-1">{subtitle}</p>}
      <div className="space-y-3 text-sm text-muted leading-relaxed mt-3">{children}</div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-accent/40 bg-surface-2 px-3 py-2 text-sm font-medium text-accent">
      {children}
    </p>
  );
}

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="text-left border-b border-border pb-2 pr-4 text-xs uppercase tracking-wide text-muted/70 font-medium whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td
                  key={j}
                  className={`border-b border-border py-2 pr-4 align-top ${
                    j === 0 ? "text-foreground font-medium whitespace-nowrap" : "text-muted"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CHIPS = [
  {
    n: 1,
    name: "Memory Ultra Fission",
    type: "Interference",
    value: "Suppresses enemy tactic damage — protects your damage dealers from skill-based burst.",
    when: [
      "You're crafting your first Legendary chip",
      "Your squad keeps losing heroes to tactic-heavy burst",
      "You're building a PvP-focused main formation",
    ],
  },
  {
    n: 2,
    name: "Gravitational Resonance Armor",
    type: "Defense",
    value: "Sustained defense that stays useful all fight, not just the opening seconds.",
    when: [
      "Your front two heroes consistently die first",
      "You fight opponents at similar or greater power",
      "Your damage is fine but the formation can't survive",
    ],
  },
  {
    n: 3,
    name: "Absolute Quantum Field",
    type: "Initial Move",
    value: "Opening-burst shield plus a follow-up defensive effect.",
    when: [
      "Your frontline collapses almost immediately",
      "You face high-opening-damage PvP formations",
      "Your sustained defense is already strong",
    ],
  },
  {
    n: 4,
    name: "Lethal Firestorm",
    type: "Attack",
    value: "Drone offense — gains extra drone targets at key star milestones.",
    when: [
      "It's one promotion from 2★ or 5★ (target-count breakpoints)",
      "Your set is otherwise complete and balanced",
    ],
  },
];

export default function ChipUpgradePrioritiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div>
        <Link href="/wiki" className="text-sm text-accent-2 hover:underline">
          ← Back to Wiki
        </Link>
        <h1 className="text-3xl font-bold mt-3">Chip Upgrade Priorities</h1>
        <p className="text-muted mt-2">
          Drone Skill Chips — what to craft first, what to upgrade first (they&rsquo;re not the same
          order), and which breakpoints are actually worth chasing.
        </p>
      </div>

      <section className="rounded-xl border border-accent/40 bg-surface-2 p-6 space-y-2">
        <p className="text-xs uppercase tracking-wide text-accent mb-1">Quick take</p>
        <p className="text-sm text-muted leading-relaxed">
          <span className="text-foreground font-medium">Craft in this order:</span> Memory Ultra Fission →
          Gravitational Resonance Armor → Absolute Quantum Field → Lethal Firestorm.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          <span className="text-foreground font-medium">Then upgrade</span> Memory and Defense first —
          but push Lethal Firestorm ahead of Absolute Quantum Field whenever it&rsquo;s close to its 2★
          or 5★ target-count breakpoint.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Always pick the variant whose Unit Stats match your{" "}
          <span className="text-foreground font-medium">actual main squad</span> — don&rsquo;t default to
          Tank chips just because Tank is common early.
        </p>
      </section>

      <Section title="How the System Works">
        <p>
          Drone Skill Chips are a mid-to-late-game layer, separate from Drone Components, Drone Parts,
          and Battle Data. The system unlocks when{" "}
          <span className="text-foreground font-medium">both</span> are true:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Your server has been open <span className="text-foreground">82 days</span></li>
          <li>Your Drone <span className="text-foreground">Combat Boost is level 10</span></li>
        </ul>
        <p>
          There are four chip categories —{" "}
          <span className="text-foreground">Initial Move, Attack, Interference, Defense</span> — and each
          chip also carries Unit Stats for Tank, Aircraft, or Missile. Matching those to the formation
          using the preset is what makes the bonuses land.
        </p>
      </Section>

      <Section title="The Four Legendary Chips" subtitle="Craft order">
        <div className="space-y-4">
          {CHIPS.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-surface-2 p-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent text-background font-bold text-xs">
                  {c.n}
                </span>
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <span className="text-xs uppercase tracking-wide text-accent-2">{c.type}</span>
              </div>
              <p className="text-sm text-muted mt-2">{c.value}</p>
              <p className="text-xs uppercase tracking-wide text-muted/70 mt-3 mb-1">Prioritize when</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted">
                {c.when.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Craft Order ≠ Upgrade Order" subtitle="The part people get wrong">
        <p>
          Lethal Firestorm is the <span className="text-foreground font-medium">fourth chip you craft</span>{" "}
          but often the <span className="text-foreground font-medium">third chip you upgrade</span>, because
          its stars add drone targets:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="text-foreground font-medium">2 stars:</span> +1 drone target</li>
          <li><span className="text-foreground font-medium">5 stars:</span> +1 more — drone attack now hits 3 targets</li>
        </ul>
        <Callout>
          If Lethal Firestorm is one promotion from 2★ or 5★, finishing that milestone beats putting the
          same materials into Absolute Quantum Field.
        </Callout>
      </Section>

      <Section title="Star Upgrade Path" subtitle="Once all four are equipped">
        <ol className="list-decimal list-inside space-y-1">
          <li>Memory Ultra Fission to 2★</li>
          <li>Gravitational Resonance Armor to 2★</li>
          <li>Lethal Firestorm to 2★ (target breakpoint)</li>
          <li>Absolute Quantum Field to 2★</li>
          <li>Work the whole set toward 5★, chasing breakpoints over visual uniformity</li>
          <li>Finish Lethal Firestorm&rsquo;s 5★ target upgrade when practical</li>
        </ol>

        <p className="text-foreground font-medium mt-4">Balanced vs. focused:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="font-semibold text-foreground mb-1">Spread it evenly when…</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>No chip is near a major breakpoint</li>
              <li>Several chips are still very low star</li>
              <li>You need damage and survivability both</li>
              <li>The next upgrades cost about the same</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="font-semibold text-foreground mb-1">Focus one when…</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Lethal Firestorm is one promotion from an extra target</li>
              <li>Memory is close to a stronger tactic-damage effect</li>
              <li>A defensive upgrade fixes why you&rsquo;re actually losing</li>
              <li>You already have the duplicates to finish it</li>
            </ul>
          </div>
        </div>
        <p>
          Above 5★: on older servers progression can extend further, with{" "}
          <span className="text-foreground">8 stars</span> commonly treated as the next meaningful point.
          Check the star preview in the Drone interface before crafting duplicates — it tells you exactly
          what the next milestone gives.
        </p>
      </Section>

      <Section title="Chip Lab &amp; Combat Boost" subtitle="Where to stop">
        <p>
          <span className="text-foreground font-medium">Chip Lab:</span> the first Legendary recipe unlocks
          at <span className="text-foreground">level 15</span>, and all Legendary recipes are available by{" "}
          <span className="text-foreground">level 20</span>. Level 20 is the target — past that, weigh
          further upgrades against Tech Center, troop centers, Barracks, Drill Grounds, or HQ
          prerequisites.
        </p>

        <p className="text-foreground font-medium mt-4">Combat Boost unlocks:</p>
        <Table
          head={["Combat Boost", "Unlock"]}
          rows={[
            ["Level 10", "Skill Chip system + first Chip Preset"],
            ["Level 150", "Second preset + Chip Skill Boost +1"],
            ["Level 300", "Third preset + Chip Skill Boost +2"],
            ["Level 450", "Fourth preset + Chip Skill Boost +3"],
            ["Level 600", "Chip Skill Boost +4"],
            ["Level 750", "Chip Skill Boost +5"],
          ]}
        />
        <p>
          Feed unwanted Data Chips into Combat Boost — but never one that&rsquo;s still filling an active
          slot.
        </p>
      </Section>

      <Section title="Presets" subtitle="A strong chip in the wrong preset is wasted">
        <Table
          head={["Battle mode", "What to check"]}
          rows={[
            ["World Map", "Uses the chip preset configured with that squad."],
            ["Storm Arena / 3v3 Brawl", "Assault and defense formations may need their own presets."],
            ["Intercity Trade / Trucks", "Check the preset when dispatching or raiding."],
            ["Alliance Train", "Defense and raid setups may need separate attention."],
          ]}
        />
        <Callout>
          Recheck presets any time you switch your formation between Tank, Aircraft, and Missile.
        </Callout>
      </Section>

      <Section title="Materials &amp; Chests">
        <p>
          Two separate resources — they are <span className="text-foreground font-medium">not</span>{" "}
          interchangeable:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="text-foreground font-medium">Basic Chip Material</span> → Epic / SSR chips</li>
          <li><span className="text-foreground font-medium">Premium Chip Material</span> → Legendary / UR chips</li>
        </ul>
        <Callout>Each Legendary chip costs 800 Premium Chip Material.</Callout>

        <p className="text-foreground font-medium mt-4">Chest yields:</p>
        <Table
          head={["Chest", "Premium Material", "Chip reward"]}
          rows={[
            ["R", "1", "Random R or higher"],
            ["SR", "5", "Random SR or higher"],
            ["SSR", "30", "Random SSR or UR"],
            ["UR", "100", "UR Skill Chip"],
            ["UR Selection", "100", "Selected UR Skill Chip"],
          ]}
        />
        <Callout>
          Don&rsquo;t open chests on sight. If the Alliance Duel task list awards points for opening Drone
          Data Chip Chests — normally Day 1 — save them and get both the rewards and the VS points.
        </Callout>
        <p>
          Don&rsquo;t confuse Skill Chip Chests with Drone Component Chests; they feed different
          progression and can score on different VS days.
        </p>
      </Section>

      <Section title="Lower-Rarity Chips">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="text-foreground font-medium">Epic / SSR:</span> fine as temporary equipment
            while you build the Legendary set. Only feed them to Combat Boost{" "}
            <em>after</em> a UR replacement is equipped.
          </li>
          <li>
            <span className="text-foreground font-medium">Rare and below:</span> little long-term value —
            feed to Combat Boost, but check they aren&rsquo;t in another squad&rsquo;s preset first.
          </li>
        </ul>
      </Section>

      <Section title="Build Order Across Squads">
        <ol className="list-decimal list-inside space-y-1">
          <li>Four usable chips on your main squad</li>
          <li>Replace the main squad&rsquo;s SSR chips with UR</li>
          <li>Hit efficient star milestones on all four main chips</li>
          <li>Build a functional second-squad set</li>
          <li>Return to deeper main-squad stars while the cost still pays off</li>
          <li>Third and fourth presets as Combat Boost and account progression justify</li>
        </ol>

        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="font-semibold text-foreground mb-1">F2P</p>
            <p className="text-sm">
              Be strict. Main troop type → first Memory Ultra Fission → Gravitational Resonance Armor →
              complete UR set → efficient 2★ and 5★ breakpoints → Combat Boost with leftovers. Don&rsquo;t
              craft a random UR duplicate just because you have 800 Premium sitting there.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="font-semibold text-foreground mb-1">Spenders</p>
            <p className="text-sm">
              Same rules, faster. Finish the main formation, then your second competitive squad&rsquo;s
              type. UR choice chests are worth the most when they close an exact star breakpoint instead
              of gambling on drops.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Common Mistakes">
        <ul className="list-disc list-inside space-y-1">
          <li>Crafting chips for the wrong troop type.</li>
          <li>Ranking Lethal Firestorm permanently fourth without checking its next star effect.</li>
          <li>Maxing one chip while the other three stagnate.</li>
          <li>Feeding still-equipped Epic chips into Combat Boost too early.</li>
          <li>Leaving strong chips assigned to the wrong preset.</li>
          <li>Opening every chip chest immediately instead of banking them for VS Day 1.</li>
          <li>
            Neglecting core Drone levels for a shiny new chip — after Drone level 150, Drone Parts
            matter a lot for continued leveling.
          </li>
        </ul>
      </Section>

      <p className="text-xs text-muted border-t border-border pt-4">
        Compiled for JcBx from the drone chip priority guide at{" "}
        <a
          href="https://heaven-guardian.com/last-war-survival-best-drone-chip-priority-guide/"
          target="_blank"
          rel="noreferrer"
          className="text-accent-2 hover:underline"
        >
          heaven-guardian.com
        </a>
        . Chip progression has changed over time and can differ by server age — check the star preview in
        your own Drone interface before committing materials.
      </p>
    </div>
  );
}
