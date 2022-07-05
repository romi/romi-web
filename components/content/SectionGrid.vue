<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
    <ContentList v-slot="{ list }" :path="query">
      <template v-for="article in list" :key="article._path">
        <li
          v-if="!article._file.includes('index') && article._path !== $route.path"
          :class="['grid gap-8 content-start', 'bg-white rounded-lg p-8', 'overflow-hidden']"
        >
          <NuxtLink v-if="article.img" class="flex -mt-8 -mx-8" :to="article._path">
            <img class="w-full object-contain" :src="article.img" :alt="`${article.title}`">
          </NuxtLink>
          <div class="grid gap-2 content-start">
            <h2 class="flex font-semibold">
              <NuxtLink class="text-xl font-bold" :to="article._path">{{ article.title }}</NuxtLink>
            </h2>
            <p>{{ article.description }}</p>
            <div class="grid gap-2 mt-2">
              <BaseButton v-if="article._path" class="" :to="article._path" variant="primary">Learn more</BaseButton>
              <BaseButton v-if="article.docs" class="" :to="article.docs" variant="secondary">Documentation</BaseButton>
            </div>
          </div>
        </li>
      </template>
    </ContentList>
  </ul>
</template>

<script setup>
const props = defineProps({
  query: {
    type: String,
    required: 'true',
  },
})
</script>
