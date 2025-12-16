import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PricingModal } from "@/components/PricingModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="font-serif">
      {/* Hero Section - Dark Theme */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-kammi-dark text-kammi-gold px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title with typewriter */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium italic mb-6 overflow-hidden whitespace-nowrap border-r-2 border-kammi-gold typewriter-title inline-block">
            Kammi
          </h1>

          {/* Subtitle with typewriter (delayed) */}
          <p className="text-2xl md:text-3xl opacity-80 mb-4 overflow-hidden whitespace-nowrap border-r-2 border-kammi-gold typewriter-subtitle block mx-auto" style={{ width: 0 }}>
            A refuge for writers
          </p>

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
              Get Kammi — €10
            </Button>
          </div>
        </div>
      </section>

      {/* Value Prop Section - Light Theme */}
      <section className="py-24 md:py-32 bg-kammi-cream text-kammi-text-dark px-6 transition-theme">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-medium italic mb-8">
            Your words. Your computer. Your peace.
          </p>
          <p className="text-lg opacity-70">
            One-time purchase. No subscriptions. No cloud. No distractions.
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
