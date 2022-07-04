<template>
  <div class="flex flex-col bg-inherit min-h-full px-2 sm:px-4 lg:px-8">
    <SiteHeader />

    <main class="py-10">
      <!-- <NuxtLayout> -->
        <NuxtPage class="container mx-auto py-8 grid gap-4" />
      <!-- </NuxtLayout> -->
    </main>

    <SiteFooter class="mt-auto" />
  </div>
</template>

<script setup>
useHead({
  // title: null,
  titleTemplate: (title) => `${title ? (title + ' | ') : ''}ROMI: Robotics for Microfarms.`,
  meta: [
    // { name: 'description', content: 'Design-focused front-end development specialized in Vue.js, Nuxt.js and TailwindCSS. Based in Barcelona. JAMstack lover.' },
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'h-full',
  },
  bodyAttrs: {
    class: 'h-full text-black bg-[#00aa5b] bg-[#00a960] bg-primary-500',
  },
})
</script>

<style lang="postcss">
#__nuxt { @apply h-full bg-inherit; }
a { @apply underline; }
</style>
