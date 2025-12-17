import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PricingModal } from "@/components/PricingModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="font-serif">
      {/* Hero Section - Dark Theme */}
      <section className="min-h-screen flex flex-col items-center justify-center text-kammi-gold px-6" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-2xl mx-auto text-center">
          {/* Title with typewriter */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mb-6 typewriter-title inline-block">
            Kammi
          </h1>

          {/* Subtitle with typewriter (delayed) - wrapped for stable centering */}
          <div className="flex justify-center w-full mb-4">
            <p className="text-2xl md:text-3xl opacity-80 typewriter-subtitle whitespace-nowrap">
              A refuge for writers
            </p>
          </div>

          {/* Tagline - fades in after typewriter */}
          <p className="text-lg md:text-xl opacity-60 mb-12 fade-in-delayed">
            Distraction-free. Personal. Beautiful.
          </p>

          {/* Single CTA Button - fades in after typewriter */}
          <div className="fade-in-delayed">
            <Button
              variant="outline"
              onClick={() => setModalOpen(true)}
              className="bg-transparent border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-lg px-10 py-6"
            >
              Get Kammi — 10 €
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Reversed Theme */}
      <section className="py-24 md:py-32 bg-kammi-sepia text-kammi-dark px-6 transition-theme">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium italic mb-8">
            Writing, without the noise
          </h2>
          <p className="text-lg opacity-80 mb-6 leading-relaxed">
            Kammi is a minimalist writing app. No toolbars. No notifications. No clutter.
            Just you and your words on a quiet page.
          </p>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Digital writing should feel as intimate as pen and paper.
            Kammi gives you that space — a place where your thoughts can flow without every button and menu pulling your attention away.
          </p>
          <p className="text-base opacity-60 italic mb-4">
            One-time purchase. No subscriptions. No cloud. Your words stay on your computer.
          </p>
          <p className="text-sm opacity-50">
            Mac users: If blocked by Gatekeeper, run in Terminal: <code className="bg-kammi-dark/20 px-1 rounded">xattr -cr /Applications/Kammi.app</code>
          </p>
        </div>
      </section>

      {/* Footer - Dark Theme */}
      <footer className="py-12 bg-kammi-dark text-kammi-gold px-6 transition-theme">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6 text-lg">
            <Link
              to="/privacy"
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/support"
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              Support
            </Link>
          </div>
          <p className="opacity-50 text-base">
            © 2026 Kammi
          </p>
        </div>
      </footer>

      {/* Pricing Modal */}
      <PricingModal
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
