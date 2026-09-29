import { NextRequest } from "next/server";

// Whitelisted Season 3 guide images. We proxy them through our own origin so
// the browser makes a same-origin request (ad-blockers won't block it), and we
// send browser-like headers so the source (which 403s bare server requests)
// serves them. Responses are cached hard since these assets don't change.
const ALLOWED = new Set([
  "2026/02/season-3.png",
  "2024/12/mithril.png",
  "2024/12/sacred-water.png",
  "2025/01/spice.png",
]);

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const rel = (path ?? []).join("/");
  if (!ALLOWED.has(rel)) {
    return new Response("Not found", { status: 404 });
  }

  const upstream = `https://www.lastwartutorial.com/wp-content/uploads/${rel}`;
  const res = await fetch(upstream, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
      Referer: "https://www.lastwartutorial.com/season-3-golden-kingdom/",
      Accept: "image/avif,image/webp,image/apng,image/png,image/*,*/*;q=0.8",
    },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return new Response(`Upstream error ${res.status}`, { status: 502 });
  }

  const buf = await res.arrayBuffer();
  return new Response(buf, {
    status: 200,
    headers: {
      "Content-Type": res.headers.get("content-type") ?? "image/png",
      "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
    },
  });
}
