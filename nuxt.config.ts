import { defineNuxtConfig } from 'nuxt'

console.log(process.env.NUXT_APP_BASE_URL)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app: {
  //   // buildAssetsDir: '../_nuxt/',
  //   baseURL: '/romi-project/',
  // },
  meta: {
    // base: process.env.NUXT_APP_BASE_URL ? { href: process.env.NUXT_APP_BASE_URL } : { href: '/' },
    meta: [
      { name: 'theme-color', content: '#1eb37b' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.png', sizes: 'any' }, // TODO: Convert to `.ico`
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/favicon@5.625x.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap' },
    ],
  },
  modules: [
    ['@nuxt/content', { documentDriven: true }],
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
  ],
})
