export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export const SITE_URL = "https://www.devcraft.example";

export function buildCanonical(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
