
// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from "vite-svg-loader";
import { readdirSync } from "node:fs";

// страницы событий для статической сборки берём из public/json/events/*.json
const eventRoutes = readdirSync("public/json/events")
  .filter((f) => f.endsWith(".json"))
  .map((f) => `/events/${f.replace(".json", "")}`);

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["@/styles/styles.less"],
  devtools: { enabled: true },

  // На GitHub Pages сайт живёт в подпапке: NUXT_APP_BASE_URL=/Lenni_nuxt/ npm run generate
  app: { baseURL: process.env.NUXT_APP_BASE_URL || "/" },
  nitro: { prerender: { crawlLinks: true, routes: ["/", "/events", ...eventRoutes] } },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "@/styles/variables.less";
            @import "@/styles/mixins.less";
          `,
        },
      },
      devSourcemap: false,
    },

    plugins: [
  svgLoader({
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              cleanupIds: false,
            },
          },
        },
      ],
    },
  }),
],

  },


  modules: ["@pinia/nuxt"],
});