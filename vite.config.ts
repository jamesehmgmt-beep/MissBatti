import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: "es2020",
    // Chunk splitting for optimal caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React + router (cached long-term)
          vendor: ["react", "react-dom", "react-router-dom"],
          // UI library chunk
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-collapsible", "@radix-ui/react-tooltip"],
        },
      },
    },
    // Increase warning threshold since we know our chunks are optimized
    chunkSizeWarningLimit: 600,
  },
}));
