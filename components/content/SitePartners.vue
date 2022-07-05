<template>
  <div class="not-prose">
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ContentList path="/partners" v-slot="{ list }" >
        <li v-for="article in list" :key="article._path" :class="['grid gap-4 content-start', 'bg-white rounded-lg p-8']">
          <NuxtLink class="flex" :to="article.url" target="_blank">
            <img class="w-auto max-h-16 object-contain" :src="article.logo" :alt="`${article.title} logo`">
          </NuxtLink>
          <div class="grid gap-2">
            <h2 class="font-semibold">
              <NuxtLink class="flex" :to="article.url" target="_blank">{{ article.title }}</NuxtLink>
            </h2>
            <p>{{ article.description }}</p>
          </div>
        </li>
      </ContentList>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
:deep(:is(h1, h2, h3, h4, h5, h6)) {
  /* @apply text-fill-white text-stroke-black text-stroke-2 paint-sfm; */
  @apply text-xl md:text-2xl text-primary-400 font-bold;
}
</style>
