interface Theme {
    name: string;
    time: string;
    bgColor: string;
    textColor: string;
    fontClass: string;
    sampleText: string;
}

const themes: Theme[] = [
    {
        name: "First Light",
        time: "4–6 AM",
        bgColor: "#fdfbf5",
        textColor: "#6b5344",
        fontClass: "font-baskerville",
        sampleText: "The discipline of dawn.",
    },
    {
        name: "Daily Pages",
        time: "6–9 AM",
        bgColor: "#fff8e7",
        textColor: "#5c4a3a",
        fontClass: "font-palatino",
        sampleText: "Write before thinking.",
    },
    {
        name: "Golden Hour",
        time: "5–7 PM",
        bgColor: "#2c2418",
        textColor: "#d4a55a",
        fontClass: "font-georgia",
        sampleText: "Words like warm light.",
    },
    {
        name: "Midnight",
        time: "10 PM–1 AM",
        bgColor: "#1a1a1a",
        textColor: "#c4b69c",
        fontClass: "font-garamond",
        sampleText: "The quiet hours.",
    },
    {
        name: "3 AM",
        time: "2–4 AM",
        bgColor: "#0f0f12",
        textColor: "#8fa4b8",
        fontClass: "font-courier",
        sampleText: "Urgency. Momentum.",
    },
];

export const ThemeShowcase = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-6xl mx-auto px-4">
            {themes.map((theme) => (
                <div
                    key={theme.name}
                    className={`rounded-lg p-6 text-center ${theme.fontClass}`}
                    style={{
                        backgroundColor: theme.bgColor,
                        color: theme.textColor,
                    }}
                >
                    <h3 className="text-lg font-medium mb-1">{theme.name}</h3>
                    <p className="text-sm opacity-70 mb-4">{theme.time}</p>
                    <p className="text-base italic leading-relaxed">{theme.sampleText}</p>
                </div>
            ))}
        </div>
    );
};
