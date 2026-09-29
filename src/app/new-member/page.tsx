import { newMemberGuide } from "@/lib/data";

export default function NewMemberPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">New Member Guide</h1>
      <p className="text-muted">Start here if you just joined JcBx.</p>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold mb-2">Join our Discord</h2>
        <a href={newMemberGuide.discordInvite} className="text-accent-2 hover:underline" target="_blank" rel="noreferrer">
          {newMemberGuide.discordInvite}
        </a>
      </section>

      <section className="rounded-xl border border-accent/40 bg-surface-2 p-6">
        <h2 className="text-xl font-semibold mb-3">Alliance Rules</h2>
        <p className="text-muted mb-4">{newMemberGuide.rulesPurpose}</p>

        <div className="space-y-5">
          {newMemberGuide.rules.map((r) => (
            <div key={r.title}>
              <h3 className="font-semibold mb-1">
                <span className="mr-2">{r.emoji}</span>
                {r.title}
              </h3>
              {r.intro && <p className="text-sm text-muted mb-2">{r.intro}</p>}
              <ul className="list-disc list-inside space-y-1 text-sm text-muted">
                {r.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {r.highlight && (
                <p className="mt-3 rounded-lg border border-accent/40 bg-surface px-3 py-2 text-sm font-semibold text-accent">
                  {r.highlight}
                </p>
              )}
              {r.note && <p className="text-xs text-muted mt-2">{r.note}</p>}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted italic border-l-2 border-accent pl-4 mt-6">
          {newMemberGuide.rulesClosing}
        </p>
        <p className="text-sm font-medium mt-4">{newMemberGuide.rulesIntro}</p>
      </section>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold mb-4">Who to Contact</h2>
        <ul className="space-y-3">
          {newMemberGuide.contacts.map((c) => (
            <li key={c.area} className="flex justify-between gap-4 border-b border-border last:border-0 pb-3 last:pb-0">
              <span className="text-muted">{c.area}</span>
              <span className="font-medium text-right">{c.contact}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
