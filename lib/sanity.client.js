import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// When no project id is set, the site simply falls back to the built-in posts.
export const hasSanity = Boolean(projectId);

export const sanityClient = hasSanity
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
