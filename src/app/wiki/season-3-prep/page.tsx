import Link from "next/link";

export const metadata = {
  title: "Season 3 Prep | JcBx",
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

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-accent/40 bg-surface-2 px-3 py-2 text-sm font-medium text-accent">
      {children}
    </p>
  );
}

export default function Season3PrepPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div>
        <Link href="/wiki" className="text-sm text-accent-2 hover:underline">
          ← Back to Wiki
        </Link>
        <h1 className="text-3xl font-bold mt-3">Season 3 Prep</h1>
        <p className="text-muted mt-2">
          Off-season checklist — what to bank, build, and decide before Season 3 starts. Split into
          what each commander does individually and what leadership locks in for the alliance. Pairs
          with the{" "}
          <Link href="/wiki/season-3-golden-kingdom" className="text-accent-2 hover:underline">
            Golden Kingdom Overview
          </Link>{" "}
          and the{" "}
          <Link href="/wiki/season-3-strategy-guide" className="text-accent-2 hover:underline">
            Strategy Guide
          </Link>
          .
        </p>
      </div>

      <Section title="Off-Season Checklist" subtitle="Individual">
        <Sub title="1. Stockpile the right consumables">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="text-foreground font-medium">Stamina</span> — biggest pre-S3 lever.
              Greenification, city/stronghold hits, Doom Walkers, sandworms, and zombies all burn it.
              Cut stamina-heavy farm 2–3 weeks out if you can.
            </li>
            <li>
              <span className="text-foreground font-medium">Generic construction / research / training speedups</span>{" "}
              — Week 1 is a building sprint (fountains, lab, Protector&rsquo;s Field). Don&rsquo;t dump
              them on filler now.
            </li>
            <li>
              <span className="text-foreground font-medium">Hero Return tickets</span> — use at S3 start
              for instant Mithril + Sacred Water. Don&rsquo;t blow the whole stack on S2 leftovers.
            </li>
            <li>
              <span className="text-foreground font-medium">Teleports</span> — Alliance Center relocate,
              hive moves, Spice War positioning.
            </li>
            <li>
              <span className="text-foreground font-medium">Radar</span> — enter S3 with a full queue.
              Desert Ruins missions drop Mithril and Merit Medals.
            </li>
          </ul>
        </Sub>

        <Sub title="2. Heroes and weapons to have ready">
          <p>S3 hero pressure, especially for a tank main:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left border-b border-border pb-2 pr-4 text-xs uppercase tracking-wide text-muted/70 font-medium">
                    Hero
                  </th>
                  <th className="text-left border-b border-border pb-2 text-xs uppercase tracking-wide text-muted/70 font-medium">
                    Why it matters in S3
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border py-2 pr-4 align-top text-foreground font-medium whitespace-nowrap">
                    Scarlett
                  </td>
                  <td className="border-b border-border py-2 align-top">
                    SSR → UR in Week 3. Needs 5★ + UR badge (Lab Lv30) + her shards from Lab 2–29.
                    Monster DR gets better. Stock her shards + universal epic shards now.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 pr-4 align-top text-foreground font-medium whitespace-nowrap">
                    Marshall
                  </td>
                  <td className="border-b border-border py-2 align-top">
                    Exclusive Weapon Day 4 of Week 1. Tank staple.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 pr-4 align-top text-foreground font-medium whitespace-nowrap">
                    Schuyler
                  </td>
                  <td className="border-b border-border py-2 align-top">EW Week 3 (air).</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 pr-4 align-top text-foreground font-medium whitespace-nowrap">
                    McGregor
                  </td>
                  <td className="border-b border-border py-2 align-top">EW Week 6 (missile).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Hero Swap opens Week 2 (two free vouchers). Exclusive weapons do not transfer.
            Don&rsquo;t swap someone below 5★ if their EW needs to stay live.
          </p>
          <Callout>
            Focus one combat type. Spreading three half-built squads is a common S3 loss.
          </Callout>
        </Sub>

        <Sub title="3. Base / troops before the map changes">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Push HQ, Tech Center, Hospital, Emergency Center, Drill Ground. Troop deaths feed Desert
              Protectors later; hospital overflow is a mid-season trade some people make on purpose.
            </li>
            <li>Keep T10 waterfall healthy. Day-5 VS training math does not change.</li>
            <li>
              Finish type mastery (your main squad) through Tier II if it&rsquo;s still open: synergy
              rows → march size II → raw stats II → damage II. Don&rsquo;t split Mithril-style research
              across troop types once S3 research opens.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Do not farm Doom Walkers right before S3.
              </span>{" "}
              First-kill Mithril resets at season start. Save the highest available DW for Day 1. On
              older servers that can be 190–250.
            </li>
          </ul>
        </Sub>

        <Sub title="4. Store / Black Market / medals">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Season Store stock resets when the new season starts. Medals persist; the SKUs do not. Buy
              Mythic/Legendary gear blueprints and other season-locked power before rollover.
            </li>
            <li>
              Celebration Black Market (often ~28 days in the S3 Celebration window): first refresh
              free, grab the free item every day, prioritize EW / UR / Overlord boxes over junk.
            </li>
            <li>
              If Transfer Surge is live: decide hive destination early. Application window often starts
              Week 8 of the old season and overlaps Celebration.
            </li>
          </ul>
        </Sub>

        <Sub title="5. Profession">
          <p>
            S3 cap goes to 100. Engineer and War Leader share the seasonal skills. First seasonal pick
            that actually matters:{" "}
            <span className="text-foreground font-medium">Double Greenification</span> (1×1 → 3×3
            recon). Plan a reset book so you can dump into greenify / sandworm / protector skills on
            Day 1 instead of leftover S2 nodes.
          </p>
        </Sub>
      </Section>

      <Section title="Off-Season Checklist" subtitle="Squad / Alliance">
        <Callout>This is where most S3 seasons are won or lost.</Callout>

        <Sub title="Leadership before Day 1">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Pick Alliance Center placement logic (R4/R5 only). Center levels off Spice, not player
              taps. Unlocks: Mithril Plant (5), oil well (10), Sacred Water Hut (15), Obelisk (20).
            </li>
            <li>
              Assign roles: city/stronghold hunters, greenify crew, sandworm/trap team, rally leads
              (highest CR), Spice War defense on the Center and sub-buildings.
            </li>
            <li>
              Hive discipline: everyone in Center range. Center also stops Giant Sandworm knockback.
            </li>
            <li>Teleport reserve for Week 4+ Spice War.</li>
            <li>
              Agree one early city/stronghold path so greenification can start as soon as the first city
              is taken (Day 3-ish of Week 1). Every missed greenify day is Profession XP and artifacts
              gone.
            </li>
          </ul>
        </Sub>

        <Sub title="Don't waste Protectors later">
          <p>
            They do not come back after a fight. Ban using them on random zombies / low PvP. Save for
            strongholds, Spice Wars, Trade Wars.
          </p>
        </Sub>

        <Sub title="Week 1 build order to memorize now">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Protector&rsquo;s Field → <span className="text-foreground font-medium">Lv10 and stop</span>{" "}
              (Lv11 starts eating Mithril + Sacred Water).
            </li>
            <li>Unlock Curse Research Lab and keep it moving.</li>
            <li>
              All Blessing Fountains to 15 in parallel, then 16 together, etc. Don&rsquo;t max one
              fountain while others sit at 5.
            </li>
            <li>Place Alliance Center Day 2, move the hive in range.</li>
            <li>Daily highest Doom Walker first-kill + Wandering Mummy Warlords (no CR needed early).</li>
            <li>Zombie first-kills at low CR levels while you ramp the lab.</li>
          </ol>
        </Sub>
      </Section>

      <Section title="What Not To Do" subtitle="Last 1–2 weeks of off-season">
        <ul className="list-disc list-inside space-y-1">
          <li>
            Open every resource chest &ldquo;just to look rich.&rdquo; Chests are a bank; open only when
            you will spend immediately.
          </li>
          <li>Split shards across three squads.</li>
          <li>Dump Mithril-equivalent thinking into random buildings once S3 starts.</li>
          <li>Kill the last high Doom Walkers &ldquo;for fun&rdquo; the night before reset.</li>
          <li>Ignore Transfer / hive plan until Day 1 panic.</li>
        </ul>
      </Section>

      <Section title="Simple 14-Day Off-Season Plan">
        <Sub title="Days 1–7 of remaining off-season">
          <p>
            HQ/tech/hospital catch-up, keep training queued, Black Market daily free, bank stamina and
            speedups, finish Scarlett 5★ if she&rsquo;s close, park Hero Return tickets.
          </p>
        </Sub>
        <Sub title="Days 8–14">
          <p>
            Stop stamina dumps, fill radar, screenshot alliance roster + war roles, confirm who leads CR
            rallies, stock teleports, don&rsquo;t touch high DWs, buy leftover Season Store blueprints.
          </p>
        </Sub>
        <Sub title="Pre-season week (Golden Realm preview)">
          <p>
            Read the live Season UI. Pre-season events and Season Boost exist; don&rsquo;t spend
            season-specific currency you don&rsquo;t understand yet.
          </p>
        </Sub>
      </Section>
    </div>
  );
}
