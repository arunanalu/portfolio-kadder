// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  runtimeConfig: {
    public: {
      api: process.env.API_URL || "default_api_url",
    }
  },
})
