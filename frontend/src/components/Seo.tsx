import { Helmet } from "react-helmet-async";
import { buildCanonical } from "@/utils/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

export default function Seo({ title, description, path }: SeoProps) {
  const fullTitle = `${title} | DevCraft`;
  const canonical = buildCanonical(path);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
