import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "sudarva",
  title: "Sudarva",

  // Project: Sudarva (https://sanity.io/manage → 62ezzo2a)
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "62ezzo2a",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
