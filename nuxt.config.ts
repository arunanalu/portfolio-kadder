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
    '@nuxtjs/tailwindcss', 'nuxt-icon'
  ],
  runtimeConfig: {
    public: {
      api: process.env.API_URL || "default_api_url",
    }
  },
})
