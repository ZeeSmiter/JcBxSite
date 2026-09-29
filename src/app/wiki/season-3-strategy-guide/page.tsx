import Link from "next/link";

export const metadata = {
  title: "Season 3 - Strategy Guide (Growth/Captures/War) | JcBx",
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

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
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

export default function Season3StrategyGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div>
        <Link href="/wiki" className="text-sm text-accent-2 hover:underline">
          ← Back to Wiki
        </Link>
        <h1 className="text-3xl font-bold mt-3">
          Season 3 — Strategy Guide (Growth / Captures / War)
        </h1>
        <p className="text-muted mt-2">
          The actionable companion to the{" "}
          <Link href="/wiki/season-3-golden-kingdom" className="text-accent-2 hover:underline">
            Golden Kingdom Overview
          </Link>
          . This one is the playbook: what to do in the opening days, how to not waste resources,
          the exact thresholds for taking strongholds, and how Spice War and the Faction Duel
          actually work.
        </p>
      </div>

      <Section title="Opening Days" subtitle="Week 1 — get this right or you fall behind">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="text-foreground font-medium">Position matters most.</span> If we&rsquo;re in a
            bad spot, relocate the alliance early so we have access to level 6 cities.
          </li>
          <li>Turn on War Fever for all attack activity (1% power boost — free value).</li>
          <li>
            Designate an alliance <span className="text-foreground font-medium">Resistance Leader</span>:
            one person who buys passes and pushes virus resistance high, then leads rallies and farms
            digging strongholds for everyone.
          </li>
          <li>Buy the Season Battle Pass and Weekly Pass immediately — the Battle Pass doubles Daily Task rewards.</li>
          <li>
            Mithril packs are <span className="text-foreground font-medium">week 1 only</span> and escalate
            in price (roughly $5 / $10 / $20 / $50). Grab the cheap tiers early if you&rsquo;re spending.
          </li>
          <li>Pick up the Eternal Pyramid decoration for the Desert Blessing boost.</li>
        </ul>
      </Section>

      <Section title="Resource Management" subtitle="Mithril &amp; Sacred Water">
        <Callout>
          Hard rule: take the Protector&rsquo;s Field to level 10 and STOP. Anything past 10 burns
          resources our seasonal buildings need.
        </Callout>

        <p className="text-foreground font-medium">Daily income sources:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Stack radar missions <em>before</em> the season starts so you can dump them into Desert Ruins missions for Mithril.</li>
          <li>Kill Doom Walker 190 daily — first-blood is worth roughly 207k Mithril.</li>
          <li>Clear small zombies (levels 1–3) for first-kill bonuses.</li>
          <li>Hold digging strongholds for hourly alliance Mithril — claim under <em>Alliance &gt; Alliance Cities &gt; Digging Strongholds</em>.</li>
          <li>Hunt sandworms and trade Sandworm Scales at the Desert Bazaar for Mithril / Sacred Water.</li>
          <li>Take the Trap Landmine profession skill to catch sandworms out on the map.</li>
        </ul>

        <p className="text-foreground font-medium mt-4">Blessing Fountain upgrade path:</p>
        <p>
          Push <span className="text-foreground">every</span> Blessing Fountain to level 15 and hold
          there until all of them are unlocked (4 + 1 from the weekly pass) — each fountain hitting 15
          is what unlocks the next one. Only after all are unlocked do you level them together to 16,
          17, and up.
        </p>

        <p className="text-foreground font-medium mt-4">Stack your cost reductions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tech research: <span className="text-foreground">Master Craftsman</span> (building cost reduction)</li>
          <li>Engineer profession level 35: <span className="text-foreground">Resource Saving</span> (up to −5%)</li>
          <li>Alliance tech: <span className="text-foreground">Veteran Craftsman</span></li>
        </ul>
      </Section>

      <Section title="Digging Stronghold Captures" subtitle="Where the Mithril comes from">
        <p>
          Minimum to be useful at all: <span className="text-foreground font-medium">2,000 virus
          resistance and 30M+ squads</span>. Your first territorial capture must be a level 1.
        </p>

        <p className="text-foreground font-medium">Virus resistance by dig level:</p>
        <Table
          head={["Dig level", "Virus resistance"]}
          rows={[
            ["Level 1", "3,750"],
            ["Level 2", "6,250"],
            ["Level 3", "8,250"],
            ["Level 4", "9,750"],
            ["Level 5", "10,250"],
            ["Level 6", "10,750"],
          ]}
        />

        <Callout>
          Rally trick: the rally leader&rsquo;s virus resistance applies to every member (unless a
          member&rsquo;s own is higher). One high-resistance leader lets the whole alliance punch above
          its weight — this is why the Resistance Leader role matters.
        </Callout>

        <p className="text-foreground font-medium mt-4">The rules:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Max <span className="text-foreground">8 dig sites</span> owned, no matter how many cities we hold.</li>
          <li><span className="text-foreground">2 captures per day.</span></li>
          <li>You get a <span className="text-foreground">4-hour window</span> to reach 100% progress.</li>
          <li><span className="text-foreground">36-hour protection</span> after a capture; you can&rsquo;t abandon and retake inside the cooldown.</li>
          <li>Territory must expand contiguously. <span className="text-foreground">No cross-warzone dig captures in Season 3</span> (trade posts are allowed from week 3).</li>
          <li>Expect multiple rallies per guardian — these don&rsquo;t fall to one hit.</li>
        </ul>

        <p className="text-foreground font-medium mt-4">Guardian types (bring the right counter):</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Golden Defender — tank</li>
          <li>Golden Striker — aircraft</li>
          <li>Golden Annihilator — missile</li>
        </ul>

        <p className="text-foreground font-medium mt-4">Free first-time participation rewards — everyone should claim all three:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Rally attack a Guardian with a high-power squad</li>
          <li>Rally attack with a single low-power hero squad</li>
          <li>Reinforce a stronghold — even 2 seconds counts</li>
        </ul>

        <p className="text-foreground font-medium mt-4">Opening capture plan:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="text-foreground">Day 1 (before reset):</span> two level-1 captures, 2,000+ resistance, 35M+ power squads.</li>
          <li><span className="text-foreground">Day 2:</span> expand to adjacent level-1 sites — 4 total.</li>
        </ul>
      </Section>

      <Section title="Desert Protectors" subtitle="Spend them like ammunition, not troops">
        <Callout>
          Desert Protectors do not come back from a fight. Do not burn them on early zombies.
        </Callout>
        <p className="text-foreground font-medium">Save them for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Stronghold captures</li>
          <li>World Boss record attempts</li>
          <li>Giant Sandworms</li>
          <li>Helping the Resistance Leader kill high-level Doom Elites</li>
        </ul>
        <p>Stationing higher numbers of Protectors is what unlocks their skills, so keep the pool healthy.</p>
      </Section>

      <Section title="Spice War" subtitle="Week 4+">
        <p>
          Two factions — <span className="text-foreground font-medium">Scarlet Legion</span> and{" "}
          <span className="text-foreground font-medium">Golden Tribe</span> — split 8 warzones 4v4. The
          two strongest warzones become the faction leaders.
        </p>

        <p className="text-foreground font-medium mt-2">Faction Awards (Week 3):</p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="text-foreground">Phase 1 (2 days):</span> leaders are set by combined warzone power, then a coin toss assigns factions.</li>
          <li><span className="text-foreground">Phase 2 (2 days, day 3 reset):</span> presidents pick a faction. &ldquo;Force Join&rdquo; displaces random warzones on a 12-hour cooldown. Revealing identity early is worth 500 diamonds. Anyone who doesn&rsquo;t pick gets assigned randomly.</li>
          <li><span className="text-foreground">Phase 3 (4 days):</span> announcement only — nothing to do.</li>
        </ul>

        <p className="text-foreground font-medium mt-4">Declaring war:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Only <span className="text-foreground">R4+</span> in the attacking faction can declare.</li>
          <li>You can only declare on alliances in the defending faction <span className="text-foreground">in your same Spice ranking group</span>.</li>
          <li>Up to <span className="text-foreground">3 alliances</span> can declare on one target; you can change target during the declaration phase.</li>
        </ul>

        <p className="text-foreground font-medium mt-4">Spice ranking groups:</p>
        <Table
          head={["Group", "Spice rank"]}
          rows={[
            ["Group 1", "1–10"],
            ["Group 2", "11–20"],
            ["Group 3", "21–30"],
            ["Group 4", "31–50"],
          ]}
        />

        <p className="text-foreground font-medium mt-4">Prep-stage duration (outnumbered defenders get a reward multiplier):</p>
        <Table
          head={["Matchup", "Duration", "Defender reward"]}
          rows={[
            ["1v1 / 2v2 / 3v3", "40 min", "—"],
            ["2v1 / 3v2", "30 min", "×2"],
            ["3v1", "20 min", "×3"],
          ]}
        />
      </Section>

      <Section title="Buildings &amp; Spice Plunder" subtitle="Read this before you defend">
        <Table
          head={["Building", "Durability", "Spice if destroyed"]}
          rows={[
            ["Alliance Center", "200k", "+10%"],
            ["Sacred Water Hut", "30k", "+5%"],
            ["Exploratory Well", "30k", "+5%"],
            ["Mithril Plant", "30k", "+5%"],
            ["Obelisk", "30k", "+5%"],
          ]}
        />
        <p>Maximum plunder is 30% (four secondary buildings at 5% + the Center at 10%).</p>

        <Callout>
          The part people get wrong: a destroyed building loots its spice percentage whether or not the
          Alliance Center survives. An attacker can lose the war and still walk away with spice by
          picking off secondary buildings.
        </Callout>

        <p className="text-foreground font-medium">
          So: defenders must reinforce <em>every</em> building we intend to keep — not just the Alliance
          Center.
        </p>

        <p className="text-foreground font-medium mt-4">Warlord Missile (attacking):</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Blast area is now <span className="text-foreground">35×35</span> (up from 25×25).</li>
          <li>3-minute launch prep — and the warlord&rsquo;s base is revealed during that window.</li>
          <li>If the warlord&rsquo;s base moves or is breached, the mission fails with a <span className="text-foreground">72-hour cooldown</span>.</li>
          <li>A successful launch forces relocation, does durability damage, and leaves 1 hour of Contaminated Land — shields inactive, bases attackable.</li>
        </ul>

        <p className="text-foreground font-medium mt-4">Muse&rsquo;s Mummy Army (defending):</p>
        <p>Available to defenders during war; damages surrounding bases.</p>
      </Section>

      <Section title="Faction Duel" subtitle="Week 7">
        <p>
          Six days of contest (Monday–Saturday), then the battle Sunday at 12:00 server time.
        </p>

        <p className="text-foreground font-medium mt-2">Invasion Rights points (Mon–Fri):</p>
        <Table
          head={["Source", "Points"]}
          rows={[
            ["Apex Arena rank 1", "500k"],
            ["Advanced Storm Arena rank 1", "500k"],
            ["Desert Storm victory", "50k"],
            ["Alliance Duel victory", "30k"],
            ["Alliance Duel MVP", "6k"],
            ["Arms Race 1st place", "2k"],
            ["Plundering hostile warzone trucks", "100 per truck"],
          ]}
        />

        <p className="text-foreground font-medium mt-4">Capitol War:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Fought in the defending faction&rsquo;s highest-ranked Spice warzone.</li>
          <li>Capture progress decides the faction winner.</li>
          <li>Rewards: Capitol control <span className="text-foreground">+10M spice</span>, each Cannon <span className="text-foreground">+5M</span> — these hit the Faction leaderboard only, not individual alliances.</li>
          <li>Four Missile Factories ring the Capitol; holding them auto-produces Duel Missiles for alliance use.</li>
          <li>The Warlord&rsquo;s Duel Missile can be launched during battle phases and can be intercepted much like Spice War missiles.</li>
        </ul>
      </Section>

      <Section title="Mistakes We&rsquo;re Not Going To Make">
        <ul className="list-disc list-inside space-y-1">
          <li>Burning Desert Protectors on early zombies instead of saving them for stronghold captures.</li>
          <li>Pushing the Protector&rsquo;s Field past level 10.</li>
          <li>Reinforcing only the Alliance Center and letting secondary buildings get picked off.</li>
          <li>Assuming spice is safe because the Center held — it isn&rsquo;t.</li>
        </ul>
      </Section>

      <p className="text-xs text-muted border-t border-border pt-4">
        Compiled for JcBx from the community guide at{" "}
        <a
          href="https://www.lastwartutorial.com/season-3-the-ultimate-strategy-guide-for-season-3-growth-captures-and-war/"
          target="_blank"
          rel="noreferrer"
          className="text-accent-2 hover:underline"
        >
          lastwartutorial.com
        </a>
        . Numbers and mechanics may change with in-game updates — verify before a major push.
      </p>
    </div>
  );
}
