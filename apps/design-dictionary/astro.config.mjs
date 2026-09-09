import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// Mirrors apps/design-styles (see its astro.config.mjs for the rationale on
// imageService and trailingSlash): fully prerendered, no runtime image
// service, no Cloudflare Images binding. `file` format keeps the no-slash
// URL as the one that resolves.
export default defineConfig({
  site: "https://design-dictionary.org",
  output: "static",
  // Pinned so `pnpm dev` at the repo root can run every app at once.
  server: { port: 4325 },
  trailingSlash: "never",
  build: { format: "file" },
  adapter: cloudflare({
    imageService: { build: "compile", runtime: "passthrough" },
    // Off so `pnpm dev` can start every app at once. Multiple workerd
    // inspectors racing for 9229 crash the first loser with EADDRINUSE.
    inspectorPort: false,
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
