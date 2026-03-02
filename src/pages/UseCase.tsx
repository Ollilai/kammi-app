import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCasesData } from "@/data/use-cases";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { generateWebPageSchema, generateBreadcrumbSchema, SITE_NAME } from "@/lib/schema";

const UseCaseTemplate = () => {
    const { slug } = useParams<{ slug: string }>();

    const data = useCasesData.find(item => item.slug === slug);

    if (!data) {
        return <Navigate to="/404" replace />;
    }

    const currentPath = `/for/${slug}`;

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
                { name: "Use Cases", url: "/for" },
                { name: data.title, url: currentPath }
            ])} />

            {/* Hero Section */}
            <section className="min-h-[70vh] flex flex-col items-center justify-center text-kammi-gold px-6 theme-midnight">
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
                    <p className="text-xl opacity-70 mb-4 tracking-widest uppercase font-sans text-sm">Kammi for {data.title}</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 italic leading-tight">
                        {data.h1}
                    </h1>
                </div>
            </section>

            {/* Problem / Solution Section */}
            <section className="py-20 md:py-28 px-6 theme-daily-pages">
                <div className="max-w-3xl mx-auto space-y-16 text-kammi-text-dark">

                    <div>
                        <h2 className="text-xl font-bold mb-4 font-sans uppercase tracking-wider opacity-50">The Challenge</h2>
                        <p className="text-2xl md:text-3xl leading-relaxed italic opacity-90">
                            "{data.problem}"
                        </p>
                    </div>

                    <div className="w-24 h-px bg-kammi-gold mx-auto"></div>

                    <div>
                        <h2 className="text-xl font-bold mb-4 font-sans uppercase tracking-wider text-kammi-gold">The Sanctuary</h2>
                        <p className="text-xl md:text-2xl leading-relaxed font-medium">
                            {data.solution}
                        </p>
                    </div>

                </div>
            </section>

            {/* Recommended Theme Highlight */}
            <section className="py-24 px-6 theme-first-light border-t border-kammi-text-dark/10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-medium italic mb-6 text-kammi-text-dark">Recommended Theme: {data.recommendedTheme}</h2>
                    <p className="text-xl text-kammi-text-dark/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {data.recommendedThemeDesc}
                    </p>
                    <div className="inline-block p-1 border border-kammi-text-dark/20 rounded-lg bg-white/50">
                        <div className="px-12 py-16 rounded-md italic text-2xl"
                            style={{
                                backgroundColor: data.recommendedTheme === 'Midnight' ? '#1a1a1a' : data.recommendedTheme === 'Daily Pages' ? '#fff8e7' : data.recommendedTheme === 'First Light' ? '#fdfbf5' : '#0f0f12',
                                color: data.recommendedTheme === 'Midnight' ? '#c4b69c' : data.recommendedTheme === 'Daily Pages' ? '#5c4a3a' : data.recommendedTheme === 'First Light' ? '#6b5344' : '#8fa4b8',
                                fontFamily: data.recommendedTheme === '3 AM' ? 'monospace' : data.recommendedTheme === 'First Light' ? 'Baskerville, serif' : data.recommendedTheme === 'Daily Pages' ? 'Palatino, serif' : 'Garamond, serif'
                            }}>
                            "The cursor blinks. The words follow."
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseCaseTemplate;
