import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { property: "og:title", content: "paulekas.eu - hobbyist dev" },
                { property: "og:description", content: "the virtual home on the web of Paulius / ghostwolf" },
                { property: "og:image", content: "https://paulekas.eu/embed.png" },
                { name: "twitter:card", content: "summart_large_image" }
            ]
        }
    },
    css: [
        'assets/root.css'
    ]
})
