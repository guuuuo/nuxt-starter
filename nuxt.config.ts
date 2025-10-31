// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
  ],
  fonts: {
    families: [
      {
        name: 'Poppins',
        weights: [400, 500, 600, 700],
        provider: 'google',
      },
    ],
  },
  sourcemap: {
    client: 'hidden'
  },

  ssr: false,
})