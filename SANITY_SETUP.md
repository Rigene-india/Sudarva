# Insights on Sanity.io — setup

The Insights section is backed by Sanity. Posts are written in **Sanity Studio** (the `studio/`
folder) and the Next.js site reads them at build/request time. Until you add your own posts, the
site shows the five built-in posts as a fallback, so nothing looks empty before Sanity is live.

The UI does not change — Sanity only replaces where the Insights content comes from.

---

## 1. Create a Sanity project

```bash
cd studio
npm install
npx sanity login          # opens the browser
npx sanity init --env     # creates a project + writes .env with the project id/dataset
```

`sanity init` will ask you to create a new project and a dataset (use `production`). It writes a
`.env` with `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.

Note the **Project ID** it gives you (also visible at https://sanity.io/manage).

## 2. Import your existing posts (optional but recommended)

The five current Insights posts are pre-converted to Sanity documents in `studio/seed.ndjson`:

```bash
# from the studio/ folder
npx sanity dataset import seed.ndjson production
```

Now those posts live in Sanity and you can edit them in the Studio.

## 3. Run the Studio (write/publish posts)

```bash
# from studio/
npm run dev        # http://localhost:3333
```

Each Insight has: Title, Slug, Category (the tag), Excerpt, Published date, Read time (optional),
Cover image, and Body (paragraphs + one heading level — matching how the site renders).

To host the Studio for the team:
```bash
npm run deploy     # publishes to https://<name>.sanity.studio
```

## 4. Point the website at Sanity

In the **project root** (not `studio/`), copy the env template and fill in your project id:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Then run the site:

```bash
npm install
npm run dev
```

The Insights list and article pages now render from Sanity. Cover images you upload in the Studio
appear on the feature card, list rows, and article header. New posts show up within ~60 seconds in
production (ISR), or immediately on the next request in dev.

---

## How it fits together

- `studio/` — standalone Sanity Studio (schema in `studio/schemaTypes/insight.js`).
- `lib/sanity.client.js` — reads `NEXT_PUBLIC_SANITY_*`; if no project id is set, the site uses the
  built-in fallback posts.
- `lib/insights.js` — GROQ query + a small transform that turns each Sanity doc (including its
  Portable Text body and cover image) into the exact shape the site's renderer expects.
- `app/page.jsx` — server component; fetches insights (ISR, 60s) and passes them to the client.
- `app/SiteClient.jsx` — sets `window.SUDARVA_INSIGHTS` before the site script runs.
- `public/script.js` — reads `window.SUDARVA_INSIGHTS` (falling back to its built-in posts) and now
  renders real cover images when a post has one.
