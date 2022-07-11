<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
    <ContentList v-slot="{ list }" :path="query">
      <template v-for="article in list" :key="article._path">
        <li v-if="!article._file.includes('index') && article._path !== $route.path">
          <BaseCard>
            <template #media>
              <NuxtLink v-if="article.img" class="flex" :to="article._path">
                <img class="w-full object-contain" :src="article.img" :alt="`${article.title}`">
              </NuxtLink>
            </template>
            <template #title="{ className }">
              <h2 class="flex"><NuxtLink :class="className" :to="article._path">{{ article.title }}</NuxtLink></h2>
            </template>
            <template #default>
              <p>{{ article.description }}</p>
            </template>
            <template #buttons>
              <BaseButton v-if="article._path" class="" :to="article._path" variant="primary">Learn more</BaseButton>
              <BaseButton v-if="article.docs" class="" :to="article.docs" variant="secondary">Documentation</BaseButton>
            </template>
          </BaseCard>
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
