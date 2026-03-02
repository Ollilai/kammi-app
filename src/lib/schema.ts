const SITE_URL = "https://kammi.app";
export const SITE_NAME = "Kammi";

interface WebPageSchemaProps {
    title: string;
    description: string;
    path: string;
}

export const generateWebPageSchema = ({ title, description, path }: WebPageSchemaProps) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `${SITE_URL}${path}`,
    "isPartOf": {
        "@type": "WebSite",
        "name": SITE_NAME,
        "url": SITE_URL
    }
});

interface BreadcrumbItem {
    name: string;
    url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
});

export const generateSoftwareApplicationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kammi",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Mac, Windows",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "description": "A minimalist, distraction-free writing app for Mac and Windows.",
    "url": SITE_URL,
    "author": {
        "@type": "Person",
        "name": "Olli Laitinen"
    }
});
