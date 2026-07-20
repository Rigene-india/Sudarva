import SiteClient from "./SiteClient";
import { getInsights } from "../lib/insights";

// Re-fetch insights from Sanity at most once a minute (ISR).
export const revalidate = 60;

export default async function Page() {
  const insights = await getInsights();
  return <SiteClient insights={insights} />;
}
