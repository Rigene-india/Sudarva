import SiteClient from "../SiteClient";
import { getInsights } from "../../lib/insights";
import { parsePath } from "../../lib/routes";

// Re-fetch insights from Sanity at most once a minute (ISR).
export const revalidate = 60;

export default async function Page({ params }) {
  const insights = await getInsights();
  const parts = params.slug;
  const pathname = !parts || parts.length === 0 ? "/" : "/" + parts.join("/");
  const route = parsePath(pathname);

  return <SiteClient insights={insights} initialPath={route.path || pathname} />;
}
