export interface UseCaseData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    problem: string;
    solution: string;
    recommendedTheme: string;
    recommendedThemeDesc: string;
}

export const useCasesData: UseCaseData[] = [
    {
        slug: "novelists",
        title: "Novelists",
        metaTitle: "Distraction-Free Writing App for Novelists | Kammi",
        metaDescription: "Writing a book requires deep focus. Kammi is a minimalist offline writing app designed to help novelists draft chapters without distraction.",
        h1: "A writing sanctuary for novelists",
        problem: "When drafting a novel, the biggest enemy is friction. Getting lost in world-building timelines, managing character wikis, or staring at a complex word processor toolbar pulls you out of the flow state required to actually put words on the page.",
        solution: "Kammi is designed specifically for the drafting phase. It provides an immersive, fullscreen environment with beautiful typography (like standard book Garamond) that makes your raw manuscript feel like a published book from the first sentence.",
        recommendedTheme: "Midnight",
        recommendedThemeDesc: "The classic Midnight theme with Garamond typography evokes literary tradition and gravitas, perfect for late-night drafting sessions."
    },
    {
        slug: "journaling",
        title: "Daily Journaling",
        metaTitle: "Minimalist App for Daily Journaling on Mac | Kammi",
        metaDescription: "Make daily journaling a habit with Kammi's beautiful, private, offline writing environment designed for personal reflection.",
        h1: "Your private, digital journal",
        problem: "Physical journals lack backups and searchability, but most digital apps feel too clinical, corporate, or publicly connected to the cloud for intimate personal thoughts.",
        solution: "Kammi marries the warmth of analog writing with digital convenience. It works entirely offline so your private thoughts stay entirely on your computer's hard drive, and the interface mimics the warmth of a physical notebook.",
        recommendedTheme: "Daily Pages",
        recommendedThemeDesc: "The warm cream background and calligraphic Palatino font of the 'Daily Pages' theme feels exactly like opening a premium Moleskine notebook."
    },
    {
        slug: "morning-pages",
        title: "Morning Pages",
        metaTitle: "The Best App for Morning Pages & Stream of Consciousness",
        metaDescription: "Complete your daily Morning Pages with Kammi. An automatically saving, distraction-free environment perfect for early morning stream of consciousness writing.",
        h1: "The perfect app for your Morning Pages",
        problem: "The practice of 'Morning Pages' requires uninterrupted stream-of-consciousness writing first thing in the morning. Opening a bright browser tab or an app with notifications immediately derails that fragile morning focus.",
        solution: "With a custom 'First Light' theme designed specifically for early mornings, Kammi greets you quietly. It auto-saves continuously behind the scenes so you can just dump your thoughts without ever reaching for a menu or the save button.",
        recommendedTheme: "First Light",
        recommendedThemeDesc: "Designed for 4-6 AM sessions, this theme uses a soft, disciplined aesthetic with Baskerville typography to clear your mind."
    },
    {
        slug: "distraction-free",
        title: "Distraction-Free Writing",
        metaTitle: "The Ultimate Distraction-Free Writing Environment | Kammi",
        metaDescription: "Stop tweaking settings and start writing. Kammi is a radically minimalist writing application that removes every possible UI distraction.",
        h1: "Radical minimalism for deep work",
        problem: "Modern writers suffer from 'tool tweaking'—wasting hours adjusting fonts, downloading plugins, or organizing folders instead of actually writing the text.",
        solution: "By restricting customization to five curated, gorgeous themes and stripping away everything else, Kammi forces you to focus on the only thing that matters: the flashing cursor and the next word.",
        recommendedTheme: "3 AM",
        recommendedThemeDesc: "When the lights are off and the deadline is looming, the '3 AM' theme with a dark background and Courier New monospaced font provides pure writerly momentum."
    }
];
