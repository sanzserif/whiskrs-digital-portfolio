import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sanzserif.github.io",
  base: "/whiskrs-digital-portfolio", // Replace with your actual repo name
  integrations: [tailwind()],
});
