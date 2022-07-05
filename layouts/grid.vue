<template>
  <article class="">
    <slot />

    <ul class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <ContentList v-slot="{ list }" :path="$route.path" :query="{ title: 'Tools' }">
        <template v-for="article in list" :key="article._path">
          <li v-if="article._path !== $route.path" :class="['grid gap-8 content-start', 'bg-white rounded-lg p-8', 'overflow-hidden']">
            <!-- <pre>{{ article }}</pre> -->
            <!-- <BaseCard class="grid gap-4 content-start"> -->
              <NuxtLink class="flex -mt-8 -mx-8" :to="article._path">
                <img class="w-full object-contain" :src="article.img" :alt="`${article.title}`">
              </NuxtLink>
              <div class="grid gap-2 content-start">
                <h2 class="flex font-semibold">
                  <NuxtLink class="text-xl font-bold" :to="article._path">{{ article.title }}</NuxtLink>
                </h2>
                <p>{{ article.description }}</p>
                <div class="flex space-x-2 mt-2">
                  <BaseButton class="" :to="article._path" variant="primary">Learn more</BaseButton>
                  <BaseButton v-if="article.docs" class="" :to="article.docs" variant="secondary">Documentation</BaseButton>
                </div>
              </div>
            <!-- </BaseCard> -->
          </li>
        </template>
      </ContentList>
    </ul>
  </article>
</template>

<script setup>
// console.log('hello from the other side')
</script>

<style lang="postcss" scoped>
:deep(:is(h1, h2, h3, h4, h5, h6)) {
  /* @apply text-fill-white text-stroke-black text-stroke-2 paint-sfm; */
  @apply text-6xl text-primary-400 font-bold;
}
</style>
