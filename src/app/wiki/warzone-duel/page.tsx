import Link from "next/link";

export const metadata = {
  title: "Warzone Duel Guide | JcBx",
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

const POINTS: { source: string; points: string; note: string }[] = [
  {
    source: "Wanted Boss — Warzone Total Damage Victory",
    points: "250,000",
    note: "Warzone-wide damage win.",
  },
  {
    source: "Apex Arena #1",
    points: "100,000",
    note: "Once a week, if a player from our server wins it.",
  },
  {
    source: "Wanted Boss — 1st Place (individual)",
    points: "50,000",
    note: "5 Wanted Bosses per week, so up to 5× per duel.",
  },
  {
    source: "Desert Storm victory",
    points: "50,000",
    note: "Top 20 alliances can enter weekly — multiplies per winning alliance.",
  },
  {
    source: "Alliance Duel victory",
    points: "30,000",
    note: "Awarded for every alliance that wins its daily Alliance Duel.",
  },
  {
    source: "Arms Race 1st place",
    points: "10,000",
    note: "Every 1st place counts.",
  },
  {
    source: "Alliance Duel MVP",
    points: "6,000",
    note: "Per daily MVP from our server — multiplies across alliances.",
  },
  {
    source: "Plunder 1 hostile Warzone truck",
    points: "100",
    note: "Small alone, enormous at scale once the whole roster does it daily.",
  },
];

export default function WarzoneDuelPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div>
        <Link href="/wiki" className="text-sm text-accent-2 hover:underline">
          ← Back to Wiki
        </Link>
        <h1 className="text-3xl font-bold mt-3">Warzone Duel Guide</h1>
        <p className="text-muted mt-2">
          Warzone Duel (server war) is a 1v1 between warzones, decided by whether you capture the
          rival&rsquo;s Capitol. A full competition runs 2–3 weeks with 4–8 warzones bracketed against
          each other to crown a champion warzone.
        </p>
      </div>

      <Section title="How the Week Works" subtitle="Two stages">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="text-foreground font-medium">Monday–Friday — Invasion Rights Contest.</span>{" "}
            Pure points race. The warzone with more points earns the right to invade. Lose it and{" "}
            <span className="text-foreground">our server and Congress get invaded instead</span>.
          </li>
          <li>
            <span className="text-foreground font-medium">Saturday — Warzone Duel War.</span> The invader
            relocates into the defender&rsquo;s warzone and assaults the Capitol. The lower-scoring side
            defends.
          </li>
        </ul>
        <Callout>
          Saturday double-booking: the Warzone Duel war starts at 15:00 server time and overlaps the
          normal Alliance Duel VS server war. Plan roles for both.
        </Callout>
      </Section>

      <Section title="Competition Rules">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="text-foreground font-medium">Elimination:</span> warzones in a bracket face
            off in random matches; winners advance against other winners until a champion is decided.
          </li>
          <li>
            <span className="text-foreground font-medium">Matchmaking:</span> winners are matched with
            winners, losers with losers.
          </li>
          <li>
            <span className="text-foreground font-medium">Victory condition:</span> capture the enemy
            warzone&rsquo;s Capitol.
          </li>
        </ul>
        <Callout>
          Winning the points race is not winning the duel. You only advance by actually capturing the
          Capitol — invasion rights alone don&rsquo;t count.
        </Callout>
      </Section>

      <Section title="Invasion Rights Points" subtitle="Monday–Friday">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left border-b border-border pb-2 pr-4 text-xs uppercase tracking-wide text-muted/70 font-medium">
                  Source
                </th>
                <th className="text-right border-b border-border pb-2 pr-4 text-xs uppercase tracking-wide text-muted/70 font-medium whitespace-nowrap">
                  Points
                </th>
                <th className="text-left border-b border-border pb-2 text-xs uppercase tracking-wide text-muted/70 font-medium">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {POINTS.map((p) => (
                <tr key={p.source}>
                  <td className="border-b border-border py-2 pr-4 align-top text-foreground font-medium">
                    {p.source}
                  </td>
                  <td className="border-b border-border py-2 pr-4 align-top text-right text-accent font-mono whitespace-nowrap">
                    {p.points}
                  </td>
                  <td className="border-b border-border py-2 align-top">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-foreground font-medium mt-4">Why trucks decide this:</p>
        <p>
          100 points looks trivial until you multiply it. A server of ~10,000 active players × 4 plunders
          a day × 5 days × 100 points ={" "}
          <span className="text-foreground font-medium">~20,000,000 points</span>. Truck plunder is the
          single biggest lever the whole roster controls.
        </p>

        <Callout>
          Do not plunder our own server&rsquo;s trucks. It stunts our own fighters&rsquo; growth, and
          there are just as many trucks on the enemy server.
        </Callout>

        <p className="mt-2">
          Train plunders do <span className="text-foreground font-medium">not</span> give Warzone Duel
          points.
        </p>
      </Section>

      <Section title="Saturday: Capitol War">
        <ul className="list-disc list-inside space-y-1">
          <li>
            The invading side relocates into the defender&rsquo;s warzone to assault the Capitol and
            contest final ownership.
          </li>
          <li>
            <span className="text-foreground font-medium">
              Commanders from the same warzone are allies, not enemies,
            </span>{" "}
            in the fight over neutral buildings — internal warzone feuds don&rsquo;t carry into these
            battles. (Commander base attacks are the exception and are not included.)
          </li>
        </ul>
        <Callout>
          Biggest individual point source: destroying a hostile Warzone Commander base is worth ~50k.
          Plenty of enemies sit in the mud area with no defense set, so power level almost doesn&rsquo;t
          matter — if it&rsquo;s undefended, zero it.
        </Callout>
      </Section>

      <Section title="Rewards">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="text-foreground font-medium">Warzone Winning Streak Rewards</span> — for the
            winning server, for players who participated with{" "}
            <span className="text-foreground">more than 50,000 points</span>. Claim from the Warzone Duel
            event page → Capitol War section.
          </li>
          <li>
            <span className="text-foreground font-medium">Diamond mines</span> — once the Capitol is
            taken, a large number spawn in the mud area of the conquered server, free for the winning
            server to collect.
          </li>
          <li>
            <span className="text-foreground font-medium">Warzone Participation Rewards</span> — based on
            the points you personally scored during the Capitol war.
          </li>
          <li>
            <span className="text-foreground font-medium">Capitol War reward chests</span> — 9 chests,
            unlocked by point milestones.
          </li>
        </ul>
      </Section>

      <Section title="Strategy Notes">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="text-foreground font-medium">Win invasion rights — don&rsquo;t throw it.</span>{" "}
            Some servers deliberately lose so everyone shows up to defend at home. The stronger argument
            is the opposite: as the invader you can farm Warzone Duel points off any base on the enemy
            server and open chests. Losing on purpose gives that up.
          </li>
          <li>
            <span className="text-foreground font-medium">The real cost of invading:</span> server access
            is limited to players in the group or the server&rsquo;s VS opponents. If a strong allied
            alliance can reinforce us at home but has no access to the server we&rsquo;re invading, that
            help disappears — and it can flip the outcome. Worth checking before we commit.
          </li>
          <li>
            <span className="text-foreground font-medium">Everything feeds the score.</span> Alliance Duel
            wins, Desert Storm wins, Arms Race firsts, and MVPs all multiply across alliances — a normal
            productive week is also a winning duel week.
          </li>
          <li>
            <span className="text-foreground font-medium">Turnout beats power.</span> Participation
            rewards and the 9 chests are scored per player, so members who show up to hit undefended
            bases get paid regardless of their size.
          </li>
        </ul>
      </Section>

      <p className="text-xs text-muted border-t border-border pt-4">
        Compiled for JcBx from the community guide and reader discussion at{" "}
        <a
          href="https://www.lastwartutorial.com/warzone-duel/"
          target="_blank"
          rel="noreferrer"
          className="text-accent-2 hover:underline"
        >
          lastwartutorial.com
        </a>
        . Mechanics may change with in-game updates.
      </p>
    </div>
  );
}
