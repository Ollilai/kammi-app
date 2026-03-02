export interface CompetitorData {
    slug: string;
    competitorName: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    theirApproach: string;
    ourApproach: string;
    features: {
        name: string;
        kammiDescription: string;
        competitorDescription: string;
    }[];
}

export const alternativesData: CompetitorData[] = [
    {
        slug: "scrivener",
        competitorName: "Scrivener",
        metaTitle: "Kammi vs Scrivener: The Minimalist Alternative for Novelists",
        metaDescription: "Looking for an alternative to Scrivener? Kammi offers a simple, beautiful, distraction-free environment for writers who want an escape from complex toolbars.",
        h1: "A quieter alternative to Scrivener",
        theirApproach: "Scrivener is a powerful powerhouse of a tool, designed to help you manage hundreds of documents, research files, character sheets, and corkboards all in one window. It's essentially an IDE (Integrated Development Environment) for writing a book.",
        ourApproach: "Kammi is a refuge. We believe that when it's time to actually sit down and write the words, you don't need corkboards or metadata tags—you need a quiet room. Kammi provides a beautiful, curated writing environment with zero distractions.",
        features: [
            {
                name: "Interface",
                kammiDescription: "Fullscreen, distraction-free environment with curated time-of-day themes.",
                competitorDescription: "Multi-pane interface with binders, inspectors, and toolbars."
            },
            {
                name: "Learning Curve",
                kammiDescription: "Zero. Open it and start typing.",
                competitorDescription: "Steep. Requires tutorials to master all the formatting and compilation tools."
            },
            {
                name: "Philosophy",
                kammiDescription: "Just you and the words. Designed for the act of writing.",
                competitorDescription: "Everything in one place. Designed for project management."
            }
        ]
    },
    {
        slug: "ulysses",
        competitorName: "Ulysses",
        metaTitle: "Kammi vs Ulysses: Distraction-Free Writing Alternative",
        metaDescription: "Comparing Kammi and Ulysses? Discover a simpler, subscription-free alternative for writers who value beautiful typography and focused writing sessions.",
        h1: "A beautiful alternative to Ulysses without the subscription",
        theirApproach: "Ulysses is a polished Markdown-based writing app designed for Apple devices. It uses a unified library system to keep all your texts in one place with a subscription-based model.",
        ourApproach: "Kammi focuses purely on the writing experience with rich, curated typography and time-based themes like 'First Light' and 'Midnight'. We do not use a subscription model—Kammi is free and your fles stay yours natively on your drive.",
        features: [
            {
                name: "Pricing Model",
                kammiDescription: "100% Free.",
                competitorDescription: "Monthly or annual subscription required."
            },
            {
                name: "File Storage",
                kammiDescription: "Saves standard text files locally. You own your data.",
                competitorDescription: "Uses a proprietary iCloud-synced unified library."
            },
            {
                name: "Aesthetic",
                kammiDescription: "Warm, literary themes mimicking paper and time of day.",
                competitorDescription: "Clean, modern, native Apple ecosystem aesthetic."
            }
        ]
    },
    {
        slug: "ia-writer",
        competitorName: "iA Writer",
        metaTitle: "A Warmer Alternative to iA Writer | Kammi App",
        metaDescription: "iA Writer is great for code-like minimalism. Kammi offers a warmer, more literary distraction-free writing experience. See the comparison.",
        h1: "A warmer alternative to iA Writer",
        theirApproach: "iA Writer pioneered the modern distraction-free writing space. Its aesthetic is clinical, sharp, and focused heavily on Markdown syntax, using a characteristic monospaced font by default.",
        ourApproach: "Kammi believes writing doesn't have to feel like coding. Instead of bright white screens and monospaced utilitarianism, Kammi offers warm, immersive themes with classic book typography (Garamond, Baskerville).",
        features: [
            {
                name: "Visual Tone",
                kammiDescription: "Warm, literary, cozy themes.",
                competitorDescription: "Clinical, sharp, modern minimalism."
            },
            {
                name: "Typography",
                kammiDescription: "Curated classic serifs (Garamond, Georgia, Palatino).",
                competitorDescription: "Custom monospaced and duospaced geometric fonts."
            },
            {
                name: "Focus Mode",
                kammiDescription: "Fade effect dims surrounding text for pen-on-paper focus.",
                competitorDescription: "Syntax highlighting and sentence focus mode."
            }
        ]
    },
    {
        slug: "obsidian",
        competitorName: "Obsidian",
        metaTitle: "Obsidian vs Kammi: When To Choose a Simpler Writing App",
        metaDescription: "Obsidian is for building a second brain. Kammi is for writing. See why Kammi is the perfect minimalist alternative when you just want to draft.",
        h1: "An alternative to Obsidian for pure writing",
        theirApproach: "Obsidian is an incredibly powerful personal knowledge base. It uses a local folder of Markdown files and allows you to build a 'second brain' via bidirectional linking, graph views, and thousands of community plugins.",
        ourApproach: "While Obsidian is perfect for research and note-taking, its endless customization can be a massive distraction when it's time to draft a chapter. Kammi is the app you switch to when you need to stop tweaking plugins and start writing.",
        features: [
            {
                name: "Primary Use Case",
                kammiDescription: "Immersive, distraction-free drafting and journaling.",
                competitorDescription: "Knowledge management, research, and note-linking."
            },
            {
                name: "Customization",
                kammiDescription: "5 curated themes. Perfectly constrained to prevent tinkering.",
                competitorDescription: "Infinite themes, CSS snippets, and community plugins."
            },
            {
                name: "Complexity",
                kammiDescription: "None. It's a blank page that greets you.",
                competitorDescription: "High. Requires setting up systems, tags, and folders."
            }
        ]
    },
    {
        slug: "word",
        competitorName: "Microsoft Word",
        metaTitle: "A Distraction-Free Alternative to Microsoft Word | Kammi",
        metaDescription: "Tired of the ribbon toolbar and formatting issues? Kammi is a distraction-free writing alternative to Microsoft Word for creative writers.",
        h1: "An escape from the Microsoft Word ribbon",
        theirApproach: "Microsoft Word is the global standard for business, academia, and publishing. It is built to do everything: mail merges, complex tables, citations, and endless formatting tools.",
        ourApproach: "You aren't writing a corporate memo—you're writing a story. Kammi strips away the ribbon, the page borders, and the grammar squiggles to give you a pure, immersive space for creative thought.",
        features: [
            {
                name: "Environment",
                kammiDescription: "Fullscreen, calm, beautiful typography.",
                competitorDescription: "Dense toolbars, ribbons, and rulers."
            },
            {
                name: "Formatting",
                kammiDescription: "Markdown-style bubble menu (Bold, Italic).",
                competitorDescription: "Hundreds of complex formatting and layout options."
            },
            {
                name: "Target Audience",
                kammiDescription: "Novelists, journalers, and creative writers.",
                competitorDescription: "Offices, students, and professional editing."
            }
        ]
    },
    {
        slug: "google-docs",
        competitorName: "Google Docs",
        metaTitle: "Alternative to Google Docs for Creative Writing | Kammi",
        metaDescription: "Google Docs is great for collaboration, but terrible for focused writing. Kammi offers a private, offline alternative for immersive creative work.",
        h1: "A quieter, offline alternative to Google Docs",
        theirApproach: "Google Docs lives in the browser. It's built around seamless real-time collaboration, commenting, leaving suggestions, and quick sharing via links.",
        ourApproach: "A browser tab is a dangerous place for a writer's attention. Kammi is a native desktop app that works entirely offline, removing the internet's distractions and keeping your words private on your own hard drive.",
        features: [
            {
                name: "Connectivity",
                kammiDescription: "100% offline. No internet required.",
                competitorDescription: "Requires internet connection (or finicky offline setup)."
            },
            {
                name: "Privacy",
                kammiDescription: "Files saved locally to your Documents folder.",
                competitorDescription: "Files stored on Google's cloud servers."
            },
            {
                name: "Distractions",
                kammiDescription: "Zero. Dedicated native application.",
                competitorDescription: "High. Lives alongside your email and social media tabs."
            }
        ]
    }
];
