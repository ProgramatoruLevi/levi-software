import { Helmet } from "react-helmet-async";
import { siteData } from "../content/siteData";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

const SEO = ({ title, description, image, path }: SEOProps) => {
  const fullTitle = title ? `${title} | ${siteData.site.name}` : siteData.site.name;
  const metaDescription = description ?? siteData.site.description;
  const url = `${siteData.site.baseUrl}${path ?? ""}`;
  const metaImage = image ?? `${siteData.site.baseUrl}/og-placeholder.svg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;