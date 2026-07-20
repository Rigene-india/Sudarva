import { sanityClient, hasSanity } from "./sanity.client";
import { urlFor } from "./sanity.image";

// Published insights, newest first. Drafts excluded.
const QUERY = `*[_type == "insight" && !(_id in path("drafts.**"))]
  | order(publishedAt desc){
    "id": slug.current,
    "tag": category,
    title,
    excerpt,
    readTime,
    publishedAt,
    coverImage,
    body
  }`;

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleString("en-US", { month: "short", year: "numeric" }); // e.g. "Jul 2026"
}

// Portable Text -> the site's body format: strings are <p>, ["h", text] are subheadings.
function ptToBody(blocks) {
  if (!Array.isArray(blocks)) return [];
  const out = [];
  for (const b of blocks) {
    if (!b || b._type !== "block") continue;
    const text = (b.children || []).map((c) => c.text || "").join("").trim();
    if (!text) continue;
    if (/^h[1-6]$/.test(b.style || "")) out.push(["h", text]);
    else out.push(text);
  }
  return out;
}

function readTime(rt, body) {
  if (rt) return /min/i.test(rt) ? rt : rt + " min";
  const words = (body || []).reduce((n, b) => {
    const t = Array.isArray(b) ? b[1] : b;
    return n + String(t).split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(1, Math.round(words / 200)) + " min";
}

export async function getInsights() {
  if (!hasSanity || !sanityClient) return [];
  try {
    const rows = await sanityClient.fetch(QUERY);
    return (rows || [])
      .map((r) => {
        const body = ptToBody(r.body);
        const cover = r.coverImage
          ? (urlFor(r.coverImage)?.width(1200).height(750).fit("crop").url() || null)
          : null;
        return {
          id: r.id,
          tag: r.tag || "Insight",
          date: fmtDate(r.publishedAt),
          read: readTime(r.readTime, body),
          title: r.title || "",
          excerpt: r.excerpt || "",
          cover,
          body,
        };
      })
      .filter((p) => p.id && p.title);
  } catch (err) {
    // Never break the page on a CMS hiccup — fall back to the built-in posts.
    console.error("[insights] Sanity fetch failed:", (err && err.message) || err);
    return [];
  }
}
