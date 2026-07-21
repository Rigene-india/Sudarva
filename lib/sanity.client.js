import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
// Server-only token (Viewer). Required when the dataset blocks anonymous reads.
const token = process.env.SANITY_API_READ_TOKEN;

// When no project id is set, the site simply falls back to the built-in posts.
export const hasSanity = Boolean(projectId);

export const sanityClient = hasSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: !token, // CDN can't send auth headers; use API when a token is set
      token: token || undefined,
    })
  : null;
