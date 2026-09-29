import Link from "next/link";

const links = [
  { href: "/blog", label: "Updates" },
  { href: "/wiki", label: "Wiki" },
  { href: "/stats", label: "Stats" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/calendar", label: "Calendar" },
  { href: "/how-we-operate", label: "How We Operate" },
  { href: "/resources", label: "Resources" },
  { href: "/new-member", label: "New Member Guide" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold tracking-wide text-lg">
          <span className="text-accent">JcBx</span>{" "}
          <span className="text-muted font-normal text-sm">JUICEBOX</span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
