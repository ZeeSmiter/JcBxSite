import Link from "next/link";
import Countdown from "@/components/Countdown";
import Ticker from "@/components/Ticker";
import { blogPosts } from "@/lib/data";
import { getEvents, getJuiceboxHeroes, getMemberOfTheWeek, getHeroWeekLabel } from "@/lib/sheet-feed";

const sections = [
  { href: "/blog", title: "Updates", desc: "War recaps and alliance announcements." },
  { href: "/wiki", title: "Wiki", desc: "Training resources and visual guides." },
  { href: "/stats", title: "Stats", desc: "Alliance performance highlights." },
  { href: "/hall-of-fame", title: "Hall of Fame", desc: "Longest-serving members, biggest contributions." },
  { href: "/calendar", title: "Calendar", desc: "Server wars, black market windows, rallies." },
  { href: "/how-we-operate", title: "How We Operate", desc: "Who to go to for what." },
  { href: "/resources", title: "Resources", desc: "Calculators, tier lists, and more." },
  { href: "/new-member", title: "New Member Guide", desc: "Start here if you just joined." },
  { href: "/faq", title: "FAQ", desc: "Common questions, answered." },
];

export default async function Home() {
  const [events, juiceboxHeroes, memberOfTheWeek, heroWeekLabel] = await Promise.all([
    getEvents(),
    getJuiceboxHeroes(),
    getMemberOfTheWeek(),
    getHeroWeekLabel(),
  ]);
  const latestPost = blogPosts[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <section className="space-y-2">
        <p className="text-accent-2 uppercase text-sm tracking-widest">Server #2030</p>
        <h1 className="text-4xl sm:text-5xl font-bold glow-text">JUICEBOX</h1>
        <p className="text-muted max-w-2xl">
          Home base for the JcBx alliance in Last War: Survival — announcements, strategy,
          and everything a member needs in one place.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Countdown events={events} />
        <Ticker items={juiceboxHeroes} weekLabel={heroWeekLabel} />
      </section>

      <section className="rounded-xl border border-border bg-surface-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-accent mb-1">Member of the Week</p>
          <h3 className="text-lg font-semibold">{memberOfTheWeek.member}</h3>
          <p className="text-sm text-muted">{memberOfTheWeek.detail}</p>
        </div>
        <Link href="/hall-of-fame" className="text-sm text-accent-2 hover:underline whitespace-nowrap">
          See Hall of Fame →
        </Link>
      </section>

      {latestPost && (
        <section className="rounded-xl border border-border bg-surface p-6">
          <p className="text-xs uppercase tracking-wide text-muted mb-1">Latest Update</p>
          <Link href="/blog" className="text-lg font-semibold hover:text-accent transition-colors">
            {latestPost.title}
          </Link>
          <p className="text-sm text-muted mt-1">{latestPost.summary}</p>
        </section>
      )}

      <section>
        <h2 className="text-lg font-semibold mb-4">Explore</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-xl border border-border bg-surface p-5 hover:border-accent transition-colors"
            >
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
