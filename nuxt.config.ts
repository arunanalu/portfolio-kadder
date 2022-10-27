import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      api: process.env.API_URL || "default_api_url",
    }
  }
})
