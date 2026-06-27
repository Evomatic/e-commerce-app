// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true },
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/eslint'
  ]
})