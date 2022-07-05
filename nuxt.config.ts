import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app: {
  //   baseURL: '/romi-project/',
  // },
  meta: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap' },
    ],
  },
  modules: [
    ['@nuxt/content', { documentDriven: true }],
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
  ],
})
