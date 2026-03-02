import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const alternativeSlugs = ["scrivener", "ulysses", "ia-writer", "obsidian", "word", "google-docs"];
const useCaseSlugs = ["novelists", "journaling", "morning-pages", "distraction-free"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes(paths: string[]) {
      return [
        ...paths,
        ...alternativeSlugs.map(slug => `/alternatives/${slug}-alternative`),
        ...useCaseSlugs.map(slug => `/for/${slug}`),
      ];
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
