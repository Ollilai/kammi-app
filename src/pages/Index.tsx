import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Monitor } from "lucide-react";
import { PricingModal } from "@/components/PricingModal";

type Platform = "mac" | "windows";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const openPricingModal = (platform: Platform) => {
    setSelectedPlatform(platform);
    setModalOpen(true);
  };

  return (
    <div className="font-serif">
      {/* Hero Section - Dark Theme */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-kammi-dark text-kammi-gold px-6 transition-theme">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium italic mb-8">
            A refuge for writers
          </h1>
          <p className="text-xl md:text-2xl opacity-80 mb-12">
            Distraction-free. Personal. Beautiful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => openPricingModal("mac")}
              className="bg-transparent border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-lg px-8 py-6"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download for Mac
            </Button>
            <Button
              variant="outline"
              onClick={() => openPricingModal("windows")}
              className="bg-transparent border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-lg px-8 py-6"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Download for Windows
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-24 md:py-32 bg-kammi-cream text-kammi-text-dark px-6 transition-theme">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Start writing today
          </h2>
          <p className="text-lg opacity-70 mb-10">
            €10 once. Yours forever. No subscriptions. No cloud. Your words stay on your computer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => openPricingModal("mac")}
              className="bg-transparent border-kammi-text-dark text-kammi-text-dark hover:bg-kammi-text-dark hover:text-kammi-cream transition-all duration-300 text-lg px-8 py-6"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download for Mac
            </Button>
            <Button
              variant="outline"
              onClick={() => openPricingModal("windows")}
              className="bg-transparent border-kammi-text-dark text-kammi-text-dark hover:bg-kammi-text-dark hover:text-kammi-cream transition-all duration-300 text-lg px-8 py-6"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Download for Windows
            </Button>
          </div>
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
            © 2024 Kammi
          </p>
        </div>
      </footer>

      {/* Pricing Modal */}
      <PricingModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        platform={selectedPlatform}
      />
    </div>
  );
};

export default Index;
