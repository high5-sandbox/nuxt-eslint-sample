// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0;',
      },
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module'],
})
