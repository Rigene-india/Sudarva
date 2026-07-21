"use client";

import { useEffect } from "react";
import { MARKUP } from "./site-markup";

// Loaded in order, exactly as the standalone site loaded them.
// globe.gl is a CDN dependency (the 3D globe on the home hero); atropos powers audience-card tilt.
const SCRIPTS = [
  "https://cdn.jsdelivr.net/npm/globe.gl@2.34.4/dist/globe.gl.min.js",
  "https://cdn.jsdelivr.net/npm/atropos@2.0.2/atropos.min.js",
  "/image-slot.js",
  "/policies.js",
  "/script.js",
];

const STYLES = [
  "https://cdn.jsdelivr.net/npm/atropos@2.0.2/atropos.min.css",
];

export default function SiteClient({ insights, initialPath }) {
  useEffect(() => {
    // Guard against double-boot (React strict mode / fast refresh).
    if (window.__sudarvaBooted) {
      // Soft Next.js navigations reuse this client — just sync the view to the new path.
      window.SUDARVA_INSIGHTS = Array.isArray(insights) ? insights : [];
      window.SUDARVA_INITIAL_PATH = initialPath || window.location.pathname;
      if (typeof window.__sudarvaApplyPath === "function") {
        window.__sudarvaApplyPath(window.SUDARVA_INITIAL_PATH);
      }
      return;
    }
    window.__sudarvaBooted = true;

    // Hand the Sanity-backed insights to the site's render logic before it runs.
    // (script.js reads window.SUDARVA_INSIGHTS, falling back to its built-in posts.)
    window.SUDARVA_INSIGHTS = Array.isArray(insights) ? insights : [];
    window.SUDARVA_INITIAL_PATH =
      initialPath ||
      (typeof window !== "undefined" ? window.location.pathname : "/");

    STYLES.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });

    let i = 0;
    const loadNext = () => {
      if (i >= SCRIPTS.length) return;
      const s = document.createElement("script");
      s.src = SCRIPTS[i++];
      s.async = false; // preserve execution order
      s.onload = loadNext;
      s.onerror = loadNext; // keep going even if a CDN is unreachable
      document.body.appendChild(s);
    };
    loadNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPath, insights]);

  // Exact markup from the design build, rendered verbatim (server + client).
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
