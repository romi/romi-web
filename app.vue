<template>
  <div class="flex flex-col bg-inherit min-h-full">
    <SiteHeader />

    <main class="py-10">
      <NuxtLayout :key="$route.path" class="container mx-auto py-16 grid gap-4">
        <NuxtPage />
      </NuxtLayout>
    </main>

    <SiteFooter class="mt-auto" />
  </div>
</template>

<script setup>
useHead({
  // title: null,
  titleTemplate: (title) => `${title ? (title + ' | ') : ''}ROMI: Robotics for Microfarms.`,
  meta: [
    // { name: 'description', content: '' },
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'text-base h-full',
  },
  bodyAttrs: {
    class: 'h-full text-primary-900 bg-primary-50 font-sans',
  },
})
</script>

<style lang="postcss">
#__nuxt { @apply h-full bg-inherit; }
a { @apply text-primary-400 hover:underline focus:underline; }
*:focus { @apply ring outline-none ring-primary-500 rounded; }
</style>
