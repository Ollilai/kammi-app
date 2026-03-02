import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DownloadModal } from "@/components/DownloadModal";
import { alternativesData } from "@/data/alternatives";
import { useCasesData } from "@/data/use-cases";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="font-garamond">
      {/* Hero Section - Midnight Theme */}
      <section className="min-h-screen flex flex-col items-center justify-center text-kammi-gold px-6 theme-midnight">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title with typewriter */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mb-6 typewriter-title inline-block italic">
            Kammi
          </h1>

          {/* Subtitle with typewriter (delayed) */}
          <div className="flex justify-center w-full mb-4">
            <p className="text-2xl md:text-3xl opacity-80 typewriter-subtitle whitespace-nowrap italic">
              A refuge for writers
            </p>
          </div>


          {/* CTA Button - fades in after typewriter */}
          <div className="fade-in-delayed mt-12">
            <Button
              variant="outline"
              onClick={() => setModalOpen(true)}
              className="bg-transparent border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-lg px-10 py-6"
            >
              Download Kammi for free
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section - Daily Pages Theme */}
      <section className="py-20 md:py-28 px-6 theme-daily-pages">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium italic mb-8">
            Story of Kammi
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            I made Kammi to create a digital writing app that removes all clutter from the experience of writing.
            A browser tab of Google Sheets or toolbar menu of Word were taking something away from the experience.
            I wanted an app that would adapt to my moods of writing.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            It's in its very early stages, ready for you to try it out. Please let me know your experiences
            of using Kammi at{" "}
            <a
              href="mailto:kammi.tuki@gmail.com"
              className="underline hover:opacity-70 transition-opacity"
            >
              kammi.tuki@gmail.com
            </a>.
          </p>
          <p className="text-lg italic">
            Thanks, and happy writing!
          </p>
          <p className="text-base mt-4 opacity-80">
            — Olli, Creator of Kammi
          </p>
        </div>
      </section>

      {/* Footer - Midnight Theme */}
      <footer className="py-16 px-6 theme-midnight border-t border-kammi-gold/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 font-sans uppercase tracking-wider text-kammi-gold">Kammi</h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-lg" style={{ color: '#c4b69c' }}>
              <Link to="/privacy" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                Privacy Policy
              </Link>
              <Link to="/support" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                Support
              </Link>
              <a href="https://github.com/Ollilai/Kammi" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                GitHub
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-sans uppercase tracking-wider text-kammi-gold">Compare</h3>
            <nav aria-label="Alternatives navigation" className="flex flex-col gap-3 text-lg" style={{ color: '#c4b69c' }}>
              {alternativesData.map(alt => (
                <Link key={alt.slug} to={`/alternatives/${alt.slug}-alternative`} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                  Kammi vs {alt.competitorName}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-sans uppercase tracking-wider text-kammi-gold">Use Cases</h3>
            <nav aria-label="Use cases navigation" className="flex flex-col gap-3 text-lg" style={{ color: '#c4b69c' }}>
              {useCasesData.map(uc => (
                <Link key={uc.slug} to={`/for/${uc.slug}`} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                  Kammi for {uc.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center pt-8 border-t border-kammi-gold/10">
          <p className="opacity-50 text-base" style={{ color: '#c4b69c' }}>
            © 2026 Kammi
          </p>
        </div>
      </footer>

      {/* Download Modal */}
      <DownloadModal
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
