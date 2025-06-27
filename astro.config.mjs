// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";


export default defineConfig({
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
  },

  integrations: [react()],
});
