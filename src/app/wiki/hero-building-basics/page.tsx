import Link from "next/link";

export const metadata = {
  title: "Hero Building Basics | JcBx",
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

function Order({ names }: { names: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {names.map((n, i) => (
        <span key={n} className="flex items-center gap-2">
          <span className="rounded-md border border-border bg-surface-2 px-3 py-1 text-sm font-medium text-foreground">
            {n}
          </span>
          {i < names.length - 1 && <span className="text-muted/60">→</span>}
        </span>
      ))}
    </div>
  );
}

function Prio({ tier, skills }: { tier: string; skills: string }) {
  const tone =
    tier === "Prio 1"
      ? "bg-accent text-background"
      : tier === "Prio 2"
        ? "bg-accent-2 text-background"
        : "bg-surface-2 text-muted border border-border";
  return (
    <div className="flex gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
      <span
        className={`h-fit shrink-0 rounded-md px-2 py-1 text-xs font-bold whitespace-nowrap ${tone}`}
      >
        {tier}
      </span>
      <p className="text-sm text-muted">{skills}</p>
    </div>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="space-y-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full rounded-lg border border-border" />
      <figcaption className="text-xs text-muted/70">{caption}</figcaption>
    </figure>
  );
}

export default function HeroBuildingBasicsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div>
        <Link href="/wiki" className="text-sm text-accent-2 hover:underline">
          ← Back to Wiki
        </Link>
        <h1 className="text-3xl font-bold mt-3">Hero Building Basics</h1>
        <p className="text-muted mt-2">
          Where to put your resources: which heroes make up each squad, what order to level their
          skills, who to star up first, and how to handle gear. Reference infographics are included at
          the bottom of each section — the text above them is the same info, just easier to read on a
          phone.
        </p>
      </div>

      <Section title="The Three Squads" subtitle="Counter triangle">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { type: "Tank", beats: "+20% DMG vs Missile" },
            { type: "Air", beats: "+20% DMG vs Tank" },
            { type: "Missile", beats: "+20% DMG vs Air" },
          ].map((s) => (
            <div key={s.type} className="rounded-lg border border-border bg-surface-2 p-4">
              <p className="font-semibold text-foreground">{s.type}</p>
              <p className="text-sm text-accent-2">{s.beats}</p>
            </div>
          ))}
        </div>
        <p>
          Each squad has a <span className="text-foreground font-medium">Front Row</span> (defense) and a{" "}
          <span className="text-foreground font-medium">Back Row</span> (attack &amp; support). Build one
          type properly before spreading into the others.
        </p>
        <Figure
          src="/wiki/heroes/hero-guide-beginner.png"
          alt="Beginner hero guide — front/back row UR and SSR heroes for each squad type"
          caption="Beginner hero guide — front/back row options by squad. Credit: #1210 [KNGH] Aethernis"
        />
      </Section>

      <Section title="Tank Squad" subtitle="Skill + star priority">
        <p className="text-foreground font-medium">Lineup / star-up order:</p>
        <Order names={["Kimberly", "Stetmann", "Williams", "Murphy", "Marshall"]} />
        <Callout>
          5-star Kim is your main focus. After that, get everyone to 4-star before starting your next
          5-star.
        </Callout>

        <p className="text-foreground font-medium mt-4">Skills:</p>
        <p>
          Get every skill to level 20 ASAP — except the top-left Williams / Murphy skills. Then max in
          this order:
        </p>
        <div className="space-y-3">
          <Prio
            tier="Prio 1"
            skills="Barrage Strike · Lightning Rush · Iron Will · All-Around Armor · Ironclad Barrier · Command Strategy"
          />
          <Prio tier="Prio 2" skills="Energy Boost · Energy Assault · Critical Charge · Stand Firm" />
          <Prio tier="Prio 3" skills="Orb Lightning · Triad Harmony" />
        </div>

        <Figure
          src="/wiki/heroes/tank-squad.png"
          alt="Tank Squad Guide infographic — skill prioritization and 5-star order"
          caption="Tank Squad Guide. Credit: #1210 Aethernis (ko-fi.com/aethernis)"
        />
      </Section>

      <Section title="Air Squad" subtitle="Skill + star priority">
        <p className="text-foreground font-medium">Lineup / star-up order:</p>
        <Order names={["DVA", "Morrison", "Lucius", "Carlie", "Schuyler"]} />
        <Callout>Get everyone to at least 3-star before working on 5-starring anyone.</Callout>

        <p className="text-foreground font-medium mt-4">Skills:</p>
        <p>
          Get every skill to level 20 ASAP — except the top-left Carlie / Lucius skills. Then max in
          this order:
        </p>
        <div className="space-y-3">
          <Prio
            tier="Prio 1"
            skills="Steel Barrage · Knight's Spirit · Silver Armor · Inferno Blaze · Armor-Piercing Shot"
          />
          <Prio
            tier="Prio 2"
            skills="Vortex Missile · Energy Adaption · Full-Auto Machine · Full Firepower · Blast Frenzy"
          />
          <Prio
            tier="Prio 3"
            skills="Armament Upgrade · Lightning Triple Strike · Dual-string Rocket · Lightning Chain · Antimatter Armor"
          />
        </div>

        <Figure
          src="/wiki/heroes/air-squad.png"
          alt="Air Squad Guide infographic — skill prioritization and star order"
          caption="Air Squad Guide. Credit: #1210 Aethernis (ko-fi.com/aethernis)"
        />
      </Section>

      <Section title="Missile Squad" subtitle="Skill + star priority">
        <p className="text-foreground font-medium">Lineup / star-up order:</p>
        <Order names={["Swift", "Tesla", "Adam", "Fiona", "McGregor"]} />

        <p className="text-foreground font-medium mt-4">Skills:</p>
        <p>
          Get every skill to level 20 ASAP <span className="text-foreground">in this numbered order</span>,
          then max them in the same order:
        </p>
        <div className="space-y-3">
          <Prio
            tier="Prio 1"
            skills="1. Targeted Strike · 2. Weakness Targeting · 3. Electric Grid Lockdown · 4. Spike Armor · 5. Double Trajectory"
          />
          <Prio
            tier="Prio 2"
            skills="6. Lightning Chain · 7. Counter Defense · 8. Unyielding Heart · 9. Atomic Blast · 10. HP Boost"
          />
          <Prio
            tier="Prio 3"
            skills="11. Precise Guidance · 12. Ballistic Boost · 13. Electric Power Boost · 14. MK43 Vehicle-Mounted Machine Gun · 15. Forward Rush"
          />
        </div>

        <Figure
          src="/wiki/heroes/missile-squad.png"
          alt="Missile Squad Guide infographic — numbered skill prioritization and star order"
          caption="Missile Squad Guide. Credit: #659 - LD9 - Taco Legion"
        />
      </Section>

      <Section title="Gear Priority" subtitle="Which slot on which row">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="font-semibold text-foreground mb-1">Front Row</p>
            <p className="text-sm text-muted">Armor · Radar</p>
          </div>
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="font-semibold text-foreground mb-1">Back Row</p>
            <p className="text-sm text-muted">Railgun · Chip</p>
          </div>
        </div>

        <p className="text-foreground font-medium mt-4">Who gets gear first, by squad:</p>
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted/70 mb-1">Tanks</p>
            <Order names={["Kim", "Murphy", "Stetmann", "Marshall", "Williams"]} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted/70 mb-1">Air</p>
            <Order names={["DVA", "Lucius", "Schuyler", "Morrison", "Carlie"]} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted/70 mb-1">Missile</p>
            <Order names={["Tesla", "McGregor", "Swift", "Fiona", "Adam"]} />
          </div>
        </div>
      </Section>

      <Section title="Gear Crafting" subtitle="Rules and costs">
        <p className="text-foreground font-medium">Three rules:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Only care about <span className="text-foreground">UR gear</span>.</li>
          <li>Always level gear in <span className="text-foreground">10-level increments</span>.</li>
          <li>Always buy <span className="text-foreground">Blueprints</span> whenever you can.</li>
        </ul>
        <p>Gear is crafted at the Gear Factory.</p>

        <p className="text-foreground font-medium mt-4">Upgrade costs:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {["Step", "Gold", "Ore", "Ceramic", "Blueprints"].map((h) => (
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
              {[
                ["Lv 0 → 10", "3.2M", "20.8k", "—", "—"],
                ["Lv 10 → 20", "5.9M", "38.8k", "—", "—"],
                ["Lv 20 → 30", "8.8M", "58.8k", "—", "—"],
                ["Lv 30 → 40", "11.2M", "76.2k", "—", "—"],
                ["Lv 40 → 1★", "93.6M", "62.5k", "750", "5"],
                ["1★ → 2★", "121.6M", "81.0k", "975", "10"],
                ["2★ → 3★", "150M", "100k", "1,200", "15"],
                ["3★ → 4★", "178M", "118.5k", "1,425", "20"],
                ["4★ → 5★", "206M", "138k", "1,650", "10 Mythic"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-b border-border py-2 pr-4 whitespace-nowrap ${
                        j === 0 ? "text-foreground font-medium" : "text-muted"
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

        <p className="text-foreground font-medium mt-4">Tank squad leveling order:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>ALL gear to 10 upon creation</li>
          <li>Kim/Stetmann gun to 40</li>
          <li>Williams/Murphy radar to 40</li>
          <li>Kim/Stet data chip to 40</li>
          <li>Williams/Murphy armor to 20</li>
          <li>Kim/Stet gun to 1-star</li>
          <li>Marshall gun to 20</li>
          <li>Kim/Stet data chip to 1-star</li>
          <li>Marshall data chip to 20</li>
          <li>Kim/Stet/Marshall radar to 20</li>
          <li>Williams/Murphy radar to 40</li>
          <li>Kim/Stet gun to 4-star</li>
          <li>Kim/Stet/Marshall radar to 40</li>
          <li>Kim/Stet/Marshall armor to 40</li>
          <li>Williams/Murphy radar to 5-star</li>
          <li>Kim/Stet data chip to 4-star</li>
          <li>Williams/Murphy data chip to 40</li>
          <li>Williams/Murphy gun to 40</li>
          <li>ALL gear to 1-star</li>
          <li>Williams/Murphy armor to 4-star</li>
          <li>Kim/Stet/Marshall radar to 4-star</li>
        </ol>
        <p className="text-xs text-muted/70">Leveling order credit: SHADOWSTRIKE1 on Reddit.</p>

        <Figure
          src="/wiki/heroes/gear-crafting.png"
          alt="Gear Crafting Guide infographic — rules, upgrade costs, and tank leveling strategy"
          caption="Gear Crafting Guide. Credit: #1210 [KNGH] Aethernis (ko-fi.com/aethernis)"
        />
      </Section>

      <Section title="Tank Mythic Gear Priority" subtitle="Which piece, which hero, what order">
        <p className="text-foreground font-medium">Gear type priority, and why:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <span className="text-foreground font-medium">Radar — get to 5 first.</span> 30% less critical
            damage taken. Even if you don&rsquo;t follow the exact chart order, prioritize 5 radar.
          </li>
          <li>
            <span className="text-foreground font-medium">Armor.</span> Lowers critical hit chance taken
            by 15%.
          </li>
          <li>
            <span className="text-foreground font-medium">Guns.</span> 10% damage boost — but only when
            countering.
          </li>
          <li>
            <span className="text-foreground font-medium">Chips.</span> Overrated. 5% reduced damage
            taken, and only when countering.
          </li>
        </ol>

        <p className="text-foreground font-medium mt-4">
          Full order (1 = first). Columns follow the tank lineup:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {["Gear", "Kim", "Stetmann", "Williams", "Murphy", "Marshall"].map((h) => (
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
              {[
                ["Radar", "1", "2", "3", "4", "5"],
                ["Armor", "6", "7", "8", "9", "10"],
                ["Gun", "11", "19", "12", "20", "15"],
                ["Chip", "13", "16", "14", "18", "17"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-b border-border py-2 pr-4 ${
                        j === 0
                          ? "text-foreground font-medium"
                          : "text-accent font-mono text-center"
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

        <Callout>
          Not running Williams and/or Stetmann? Send that second Radar to Murphy instead, or to whichever
          hero you actually field — whatever is more effective.
        </Callout>
        <p className="text-xs text-muted/70">
          This is a general priority guide; it shifts a bit with your lineup, the season, and exclusive
          weapon priorities.
        </p>

        <Figure
          src="/wiki/heroes/tank-mythic-gear.png"
          alt="Tank Mythic Gear Priority chart — numbered order across radar, armor, gun, and chip"
          caption="Tank Mythic Gear Priority. Credit: Rickle (YouTube @YT-Rickle · buymeacoffee.com/rickle)"
        />
      </Section>

      <p className="text-xs text-muted border-t border-border pt-4">
        Infographics are the work of their creators — Aethernis (#1210), Taco Legion (#659 LD9), and
        Rickle — and are reproduced here for JcBx members with credit. Skill and gear values may shift
        with game updates.
      </p>
    </div>
  );
}
