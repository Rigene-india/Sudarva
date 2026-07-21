/**
 * Path ↔ SPA view mapping for Sudarva.
 * Used by Next.js catch-all routes and by public/script.js (History API).
 */

export const PATH_TO_ROUTE = {
  "/": { view: "home" },
  "/about": { view: "about" },
  "/careers": { view: "careers" },
  "/connect": { view: "connect" },
  "/contact": { view: "contact" },
  "/guides": { view: "guides" },
  "/support": { view: "support" },
  "/insight": { view: "insights" },
  "/solutions/travel": { view: "sol-travel" },
  "/solutions/partner": { view: "sol-partner" },
  "/solutions/network": { view: "sol-network" },
  "/solutions/api": { view: "sol-api" },
};

/** @param {string} pathname */
export function parsePath(pathname) {
  const path = (pathname || "/").replace(/\/+$/, "") || "/";

  if (PATH_TO_ROUTE[path]) return { ...PATH_TO_ROUTE[path], path };

  const insight = path.match(/^\/insight\/([^/]+)$/);
  if (insight) return { view: "insight", slug: decodeURIComponent(insight[1]), path };

  const support = path.match(/^\/support\/([^/]+)$/);
  if (support) return { view: "support-article", articleId: decodeURIComponent(support[1]), path };

  const policy = path.match(/^\/policies\/([^/]+)$/);
  if (policy) return { view: "policy", policyId: decodeURIComponent(policy[1]), path };

  return { view: "home", path: "/" };
}

/** Map SPA navigation to a URL path. */
export function pathForNav(nav) {
  switch (nav) {
    case "home":
      return "/";
    case "About Sudarva":
      return "/about";
    case "Careers":
      return "/careers";
    case "Guides":
      return "/guides";
    case "Insights":
      return "/insight";
    case "Support":
      return "/support";
    case "Connect":
      return "/connect";
    case "Contact":
      return "/contact";
    case "sol-travel":
      return "/solutions/travel";
    case "sol-partner":
      return "/solutions/partner";
    case "sol-network":
      return "/solutions/network";
    case "sol-api":
      return "/solutions/api";
    default:
      return null;
  }
}

export function pathForInsight(slug) {
  return "/insight/" + encodeURIComponent(slug);
}

export function pathForArticle(id) {
  return "/support/" + encodeURIComponent(id);
}

export function pathForPolicy(id) {
  return "/policies/" + encodeURIComponent(id);
}

export function pathForView(view, opts = {}) {
  if (view === "insight" && opts.slug) return pathForInsight(opts.slug);
  if (view === "support-article" && opts.articleId) return pathForArticle(opts.articleId);
  if (view === "policy" && opts.policyId) return pathForPolicy(opts.policyId);
  if (view === "insights") return "/insight";
  if (view === "home") return "/";
  if (view === "about") return "/about";
  if (view === "careers") return "/careers";
  if (view === "connect") return "/connect";
  if (view === "contact") return "/contact";
  if (view === "guides") return "/guides";
  if (view === "support") return "/support";
  if (view === "sol-travel") return "/solutions/travel";
  if (view === "sol-partner") return "/solutions/partner";
  if (view === "sol-network") return "/solutions/network";
  if (view === "sol-api") return "/solutions/api";
  return "/";
}
