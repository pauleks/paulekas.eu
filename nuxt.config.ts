import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        {
          property: "og:title",
          content: "paulekas.eu - experimentalist developer",
        },
        {
          property: "og:description",
          content: "the virtual home on the web of Paulius / ghostwolf",
        },
        { property: "og:image", content: "https://paulekas.eu/embed.png" },
        { name: "twitter:card", content: "summart_large_image" },
      ],
    },
  },
  css: ["assets/root.css"],
});
