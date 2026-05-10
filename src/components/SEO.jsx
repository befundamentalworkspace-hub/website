import { Helmet } from "react-helmet-async";

const SITE_URL = "https://website-navy-alpha-71.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/fundamental-og-image.png`;

export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Fundamental.co" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}