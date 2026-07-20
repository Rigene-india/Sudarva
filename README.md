# Sudarva — Website (Next.js)

The full Sudarva site as a Next.js (App Router) application. This is the **new UI** — with the
mega-menu navigation and the dedicated Support Article page — ported faithfully from the design
build. Nothing in the visual design was changed.

## Requirements
- Node.js 18.18+ (or 20+)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```

Production:
```bash
npm run build
npm run start
```

## Deploy
Deploys as-is to Vercel (zero config), or any Node host. `npm run build` then `npm run start`.

## Insights are backed by Sanity.io

The Insights section is powered by a Sanity CMS — write and publish posts in Sanity Studio and they
appear on the site (with cover images). The five original posts are kept as a built-in fallback, so
the site works before Sanity is configured. **Setup steps are in [`SANITY_SETUP.md`](./SANITY_SETUP.md).**

Quick version:
1. `cd studio && npm install && npx sanity login && npx sanity init --env`
2. (optional) `npx sanity dataset import seed.ndjson production` — loads the 5 existing posts
3. `cp .env.local.example .env.local` in the project root and paste your project id
4. `npm install && npm run dev`

## How it's put together
```
app/
  layout.jsx        # <html>/<body> shell, metadata, loads globals.css
  page.jsx          # server component: fetches insights from Sanity (ISR), renders the site
  SiteClient.jsx    # client: injects insights, renders the markup, boots the interactive logic
  globals.css       # the complete stylesheet (light/dark theme, animations, mega-menu, support article)
  site-markup.js    # the exact page markup (home, about, careers, solutions, connect,
                    # guides, support, support-article, insights, contact, legal policies)
lib/
  sanity.client.js  # env-driven Sanity client (no env = built-in fallback posts)
  sanity.image.js   # cover-image URL builder
  insights.js       # GROQ query + transform to the shape the renderer expects
public/
  script.js         # all interactivity: routing, theme toggle, 3D globe, typed terminal,
                    # quote/morse animations, stat count-up, forms, mobile menu, mega-menu.
                    # Insights read from window.SUDARVA_INSIGHTS (Sanity), else built-in posts.
  policies.js       # the six legal documents (Terms, Privacy, Cookie, AUP, Refund, DPA) as data
  image-slot.js     # image-placeholder web component (the UI is fully code-drawn; kept for parity)
studio/             # standalone Sanity Studio (schema + config + seed.ndjson)
```

The page markup is server-rendered exactly as designed, and the original interactive logic runs
on the client after hydration (loaded in order: globe.gl → image-slot → policies → script). This
keeps the UI byte-for-byte faithful while giving you a real Next.js project to build and deploy on.

## Two internet dependencies (by design, unchanged from the original)
- **globe.gl** — the 3D globe on the home hero (loaded from CDN)
- **Google Fonts** — Poppins + JetBrains Mono (imported in `globals.css`)

Everything else works offline. If the globe or fonts don't show, the machine needs internet
access — no code change required.

## Notes
- Navigation is client-side (the nav swaps in-page views), matching the original single-page design.
- Theme preference (light/dark) is saved to `localStorage`.
- `reactStrictMode` is off so the site's own DOM logic isn't double-invoked in development.

### Want real per-page URLs?
This build keeps the original in-page routing. If you'd like true Next.js routes
(`/about`, `/careers`, `/solutions/travel-connectivity`, `/support/[slug]`, `/legal/[policy]`, …)
with server rendering per page and proper SEO, that's a follow-up refactor — say the word.
