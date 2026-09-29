import { externalResources } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Resources</h1>
      <p className="text-muted">Curated external tools worth bookmarking.</p>
      <ul className="space-y-4">
        {externalResources.map((r) => (
          <li key={r.title} className="rounded-xl border border-border bg-surface p-5">
            <a href={r.url} className="font-semibold hover:text-accent transition-colors" target="_blank" rel="noreferrer">
              {r.title}
            </a>
            <p className="text-sm text-muted mt-1">{r.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
