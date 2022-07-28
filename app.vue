<template>
  <div class="flex flex-col bg-inherit min-h-full">
    <SiteHeader />

    <main class="py-10">
      <NuxtPage />
    </main>

    <SiteFooter class="mt-auto" />
  </div>
</template>

<script setup>
useHead({
  // title: null,
  titleTemplate: (title) => `${title ? (title + ' | ') : ''}ROMI: Robotics for Microfarms.`,
  meta: [
    { name: 'description', content: 'Robotics for Microfarms develops open technologies to assist organic, diversified, vegetable farmers.' },
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'text-base h-full',
  },
  bodyAttrs: {
    class: 'h-full text-primary-900/75 bg-primary-50 font-sans',
  },
})
</script>

<style lang="postcss">
#__nuxt { @apply h-full bg-inherit; }
a { @apply text-primary-400 hover:underline focus:underline; }
*:focus-visible { @apply ring outline-none ring-primary-500 rounded; }
</style>
