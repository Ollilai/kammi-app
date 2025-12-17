import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, Monitor, ChevronDown } from "lucide-react";

// Stripe Payment Link
const STRIPE_LINK = "https://buy.stripe.com/7sYdR9bla2Dg5eugJc6Zy00";

// Download URLs (for future use)
const DOWNLOAD_LINKS = {
  mac: "https://github.com/Ollilai/Kammi/releases/download/v1.0.2/Kammi-1.0.2-arm64.dmg",
  windows: "https://github.com/Ollilai/Kammi/releases/download/v1.0.2/Kammi.Setup.1.0.2.exe",
};

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PricingModal({ open, onOpenChange }: PricingModalProps) {
  // Scholarship form state
  const [showScholarship, setShowScholarship] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scholarshipSubmitted, setScholarshipSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset state when modal closes
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset after a small delay to avoid visual glitches
      setTimeout(() => {
        setShowScholarship(false);
        setEmail("");
        setScholarshipSubmitted(false);
        setError(null);
      }, 200);
    }
    onOpenChange(newOpen);
  };

  // Handle scholarship form submission
  const handleScholarshipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/scholarship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setScholarshipSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-kammi-dark border-kammi-gold/30 text-kammi-gold font-serif sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="text-2xl font-medium">
            Choose your platform
          </DialogTitle>
          <DialogDescription className="text-kammi-gold/70 text-base">
            10 € once. Yours forever.
          </DialogDescription>
        </DialogHeader>

        {/* Platform Buttons */}
        <div className="py-4">
          <div className="flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-base py-5"
            >
              <a href={STRIPE_LINK}>
                <Apple className="mr-2 h-5 w-5" />
                Mac
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-base py-5"
            >
              <a href={STRIPE_LINK}>
                <Monitor className="mr-2 h-5 w-5" />
                Windows
              </a>
            </Button>
          </div>
        </div>

        {/* Scholarship Section */}
        <div className="border-t border-kammi-gold/20 pt-4 mt-2">
          {!scholarshipSubmitted ? (
            <>
              <button
                onClick={() => setShowScholarship(!showScholarship)}
                className="w-full text-sm text-kammi-gold/50 hover:text-kammi-gold/80 transition-colors flex items-center justify-center gap-1"
              >
                In need of a scholarship?
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${showScholarship ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Scholarship Form */}
              {showScholarship && (
                <form onSubmit={handleScholarshipSubmit} className="mt-4 space-y-3">
                  <p className="text-sm text-kammi-gold/60 text-center">
                    We believe everyone deserves a quiet place to write. Enter your email and we'll send you the download link.
                  </p>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-transparent border-kammi-gold/30 text-kammi-gold placeholder:text-kammi-gold/30 focus:border-kammi-gold"
                  />
                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-kammi-gold/20 text-kammi-gold hover:bg-kammi-gold/30 border border-kammi-gold/30"
                  >
                    {isSubmitting ? "Sending..." : "Request Scholarship"}
                  </Button>
                </form>
              )}
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-2">
              <p className="text-kammi-gold/80">
                Check your inbox — your download link is on its way.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
