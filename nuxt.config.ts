// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [],

  sentry: {
    sourceMapsUploadOptions: {
      org: 'amoy-labs',
      project: 'nuxt-starter'
    }
  },

  sourcemap: {
    client: 'hidden'
  }
})