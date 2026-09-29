import { getFaqs } from "@/lib/sheet-feed";

export default async function FAQPage() {
  const faqs = await getFaqs();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((f) => (
          <details key={f.question} className="rounded-xl border border-border bg-surface p-5 group">
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              {f.question}
              <span className="text-muted group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-muted mt-3">{f.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
