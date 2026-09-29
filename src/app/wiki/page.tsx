import Link from "next/link";
import { wikiSections } from "@/lib/data";

export default function WikiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Wiki</h1>
      <p className="text-muted">
        Training resources, guides, and go-to files for members. Sections below are a
        starting structure — reorganize as the content grows.
      </p>
      <div className="space-y-8">
        {wikiSections.map((s) => (
          <section key={s.title} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="text-xl font-semibold mb-1">{s.title}</h2>
            <p className="text-sm text-muted mb-4">{s.description}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.items.map((item) =>
                item.href ? (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block h-full rounded-lg border border-accent/40 bg-surface-2 p-4 hover:border-accent transition-colors"
                    >
                      <p className="font-medium text-accent-2">{item.title} →</p>
                      <p className="text-sm text-muted">{item.description}</p>
                    </Link>
                  </li>
                ) : (
                  <li key={item.title} className="rounded-lg border border-border bg-surface-2 p-4">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted">{item.description}</p>
                  </li>
                )
              )}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
