"use client";

import { useEffect } from "react";
import { MARKUP } from "./site-markup";

// Loaded in order, exactly as the standalone site loaded them.
// globe.gl is a CDN dependency (the 3D globe on the home hero); the rest are local.
const SCRIPTS = [
  "https://cdn.jsdelivr.net/npm/globe.gl@2.34.4/dist/globe.gl.min.js",
  "/image-slot.js",
  "/policies.js",
  "/script.js",
];

export default function SiteClient({ insights }) {
  useEffect(() => {
    // Guard against double-boot (React strict mode / fast refresh).
    if (window.__sudarvaBooted) return;
    window.__sudarvaBooted = true;

    // Hand the Sanity-backed insights to the site's render logic before it runs.
    // (script.js reads window.SUDARVA_INSIGHTS, falling back to its built-in posts.)
    window.SUDARVA_INSIGHTS = Array.isArray(insights) ? insights : [];

    let i = 0;
    const loadNext = () => {
      if (i >= SCRIPTS.length) return;
      const s = document.createElement("script");
      s.src = SCRIPTS[i++];
      s.async = false; // preserve execution order
      s.onload = loadNext;
      s.onerror = loadNext; // keep going even if the globe CDN is unreachable
      document.body.appendChild(s);
    };
    loadNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Exact markup from the design build, rendered verbatim (server + client).
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
