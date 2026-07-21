import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./studio/schemaTypes";

/**
 * Embedded Studio config — served at /studio on the Next.js site
 * (local: http://localhost:3000/studio, live: https://your-domain/studio).
 */
export default defineConfig({
  name: "sudarva",
  title: "Sudarva",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "62ezzo2a",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
