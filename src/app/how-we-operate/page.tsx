import { getLeadershipStructure } from "@/lib/sheet-feed";

export default async function HowWeOperatePage() {
  const leadershipStructure = await getLeadershipStructure();
  const [r5, ...verticals] = leadershipStructure;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">How We Operate</h1>
        <p className="text-muted mt-2">
          JcBx runs on a unified leadership structure: the R5 sets vision and
          direction, and four R4 verticals — Warlord, Recruiter, Muse, and
          Butler — each own a piece of day-to-day operations. A Liaison /
          Secretary supports diplomacy and documentation.
        </p>
      </div>

      {/* R5 */}
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <h2 className="text-xl font-semibold">
            <span className="mr-2">{r5.emoji}</span>
            {r5.title}
            {r5.subtitle && (
              <span className="text-muted font-normal"> — {r5.subtitle}</span>
            )}
          </h2>
          {r5.owners && r5.owners.length > 0 && (
            <span className="text-xs text-accent-2 shrink-0">{r5.owners.join(", ")}</span>
          )}
        </div>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted sm:columns-2">
          {r5.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* R4 verticals + Liaison */}
      <div className="grid gap-4 sm:grid-cols-2">
        {verticals.map((v) => (
          <div key={v.title} className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-baseline justify-between gap-3 mb-3">
              <h3 className="font-semibold">
                <span className="mr-2">{v.emoji}</span>
                {v.title}
                {v.subtitle && <span className="text-muted font-normal"> — {v.subtitle}</span>}
              </h3>
            </div>
            {v.owners && v.owners.length > 0 && (
              <p className="text-xs text-accent-2 mb-3">{v.owners.join(", ")}</p>
            )}

            <p className="text-xs uppercase tracking-wide text-muted/70 mb-1">Responsibilities</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-4">
              {v.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {v.specificTasks && v.specificTasks.length > 0 && (
              <>
                <p className="text-xs uppercase tracking-wide text-muted/70 mb-1">Specific Tasks</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted">
                  {v.specificTasks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
