import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { alternativesData } from "@/data/alternatives";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, SITE_NAME } from "@/lib/schema";

const AlternativeTemplate = () => {
    const { slug } = useParams<{ slug: string }>();

    // Try to find the competitor using the slug, stripping out "-alternative" if it exists in the URL
    const cleanSlug = slug?.replace("-alternative", "");
    const data = alternativesData.find(item => item.slug === cleanSlug);

    if (!data) {
        return <Navigate to="/404" replace />;
    }

    const currentPath = `/alternatives/${slug}`;

    // Software Comparison Schema
    const comparisonSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Kammi",
        "applicationCategory": "WordProcessor",
        "operatingSystem": "Mac, Windows",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <div className="font-garamond">
            <SEO
                title={data.metaTitle}
                description={data.metaDescription}
                canonicalPath={currentPath}
            />
            <JsonLd data={generateWebPageSchema({ title: data.metaTitle, description: data.metaDescription, path: currentPath })} />
            <JsonLd data={generateBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Alternatives", url: "/alternatives" },
                { name: data.competitorName, url: currentPath }
            ])} />
            <JsonLd data={comparisonSchema} />

            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-kammi-gold px-6 theme-midnight">
                <div className="w-full max-w-2xl text-left mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
                        Back to Kammi
                    </Link>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl opacity-70 mb-4 tracking-widest uppercase font-sans text-sm">Kammi vs {data.competitorName}</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 italic leading-tight">
                        {data.h1}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                        {data.metaDescription}
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 md:py-28 px-6 theme-first-light">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4 font-sans uppercase tracking-wider text-kammi-text-dark/50">The {data.competitorName} Approach</h2>
                        <p className="text-xl leading-relaxed text-kammi-text-dark">
                            {data.theirApproach}
                        </p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4 font-sans uppercase tracking-wider text-kammi-gold">The Kammi Approach</h2>
                        <p className="text-xl leading-relaxed text-kammi-text-dark font-medium">
                            {data.ourApproach}
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature Comparison */}
            <section className="py-20 md:py-28 px-6 theme-daily-pages border-t border-kammi-text-dark/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-medium italic text-center mb-16 text-kammi-text-dark">Focus Where It Counts</h2>

                    <div className="space-y-12">
                        {data.features.map((feature, idx) => (
                            <div key={idx} className="bg-white/50 p-8 rounded-xl border border-kammi-text-dark/5">
                                <h3 className="text-2xl font-bold mb-6 text-center text-kammi-text-dark">{feature.name}</h3>

                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center mb-3 text-kammi-text-dark/60 font-sans tracking-wide">
                                            <XCircle className="w-5 h-5 mr-2" />
                                            <span className="font-semibold">{data.competitorName}</span>
                                        </div>
                                        <p className="text-lg text-kammi-text-dark/80">{feature.competitorDescription}</p>
                                    </div>

                                    <div className="hidden md:block w-px bg-kammi-text-dark/10"></div>

                                    <div className="flex-1">
                                        <div className="flex items-center mb-3 text-kammi-gold font-sans tracking-wide">
                                            <CheckCircle2 className="w-5 h-5 mr-2" />
                                            <span className="font-semibold">Kammi</span>
                                        </div>
                                        <p className="text-lg text-kammi-text-dark font-medium">{feature.kammiDescription}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 theme-midnight text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-medium italic mb-8 text-kammi-gold">
                        Ready to just write?
                    </h2>
                    <p className="text-xl opacity-80 mb-10 text-kammi-gold">
                        Download Kammi today. It's completely free, offline-first, and requires no account.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-transparent border border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-lg px-10 py-5 rounded-md"
                    >
                        Get Kammi for Mac & Windows
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AlternativeTemplate;
