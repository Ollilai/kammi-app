import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Apple, Monitor } from "lucide-react";

// Download URLs
const DOWNLOAD_LINKS = {
    mac: "https://github.com/Ollilai/Kammi/releases/download/v1.0.3/Kammi-1.0.3-arm64.dmg",
    windows: "https://github.com/Ollilai/Kammi/releases/download/v1.0.3/Kammi.Setup.1.0.3.exe",
};

interface DownloadModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function DownloadModal({ open, onOpenChange }: DownloadModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-kammi-dark border-kammi-gold/30 text-kammi-gold font-serif sm:max-w-md">
                <DialogHeader className="text-center sm:text-center">
                    <DialogTitle className="text-2xl font-medium">
                        Choose your platform
                    </DialogTitle>
                    <DialogDescription className="text-kammi-gold/70 text-base">
                        Free. Open source. Yours forever.
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
                            <a href={DOWNLOAD_LINKS.mac}>
                                <Apple className="mr-2 h-5 w-5" />
                                Mac
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="bg-transparent border-kammi-gold text-kammi-gold hover:bg-kammi-gold hover:text-kammi-dark transition-all duration-300 text-base py-5"
                        >
                            <a href={DOWNLOAD_LINKS.windows}>
                                <Monitor className="mr-2 h-5 w-5" />
                                Windows
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Mac note */}
                <p className="text-xs text-kammi-gold/40 text-center">
                    Mac users: If blocked by Gatekeeper, run in Terminal: <code className="bg-kammi-gold/10 px-1 rounded">xattr -cr /Applications/Kammi.app</code>
                </p>
            </DialogContent>
        </Dialog>
    );
}
