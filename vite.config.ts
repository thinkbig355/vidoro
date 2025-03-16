import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Listen on all interfaces (IPv4 and IPv6)
    port: 8080,
    allowedHosts: [
      "18254863-8b26-40dd-bc8e-8150e10c5241-00-2dcrs6lcgq7v1.picard.replit.dev",
    ],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Conditionally include the plugin in development mode
  ].filter(Boolean), // Remove any falsy values (like undefined when mode isn't 'development') from the plugins array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' to the 'src' directory
    },
  },
}));
