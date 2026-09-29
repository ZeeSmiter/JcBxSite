import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Updates</h1>
      <p className="text-muted">War recaps, announcements, and alliance news.</p>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border border-border bg-surface p-6">
            <p className="text-xs text-muted mb-1">{new Date(p.date).toLocaleDateString()}</p>
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-muted mb-3">{p.summary}</p>
            <p className="whitespace-pre-line">{p.body}</p>

            {p.table && (
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {p.table.head.map((h, i) => (
                        <th
                          key={h}
                          className={`border-b border-border pb-2 pr-4 text-xs uppercase tracking-wide text-muted/70 font-medium whitespace-nowrap ${
                            i === 0 ? "text-left" : "text-right"
                          }`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {p.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`border-b border-border py-2 pr-4 ${
                              ci === 0
                                ? "text-foreground font-medium"
                                : "text-right font-mono text-accent whitespace-nowrap"
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
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
