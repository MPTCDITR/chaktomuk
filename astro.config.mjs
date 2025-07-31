// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import { fileURLToPath } from "url";

import react from "@astrojs/react";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "http://localhost:4321",

  server: {
    host: "::",
  },
  i18n: {
    defaultLocale: "km",
    locales: ["en", "km"], // English and Khmer
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/": fileURLToPath(new URL("./src", import.meta.url)),
        "@/assets": fileURLToPath(new URL("./public/assets", import.meta.url)),
      },
    },
  },
  integrations: [react()],
});
