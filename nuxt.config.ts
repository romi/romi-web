import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/romi-project/',
  },
  router: {
    base: '/romi-project/',
  },
  nitro: {
    baseURL: '/romi-project/',
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
  ],

  // content: {
  //   markdown: {
  //     rehypePlugins: {
  //       'rehype-slug': false
  //     },
  //   },
  // },
})
