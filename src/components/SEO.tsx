import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    canonicalPath?: string;
    ogImage?: string;
}

const SITE_URL = "https://kammi.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SEO = ({ title, description, canonicalPath = "/", ogImage = DEFAULT_OG_IMAGE }: SEOProps) => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Kammi" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};
