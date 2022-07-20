<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <ContentList path="/partners" v-slot="{ list }" >
      <li v-for="article in list" :key="article._path">
        <BaseCard v-bind="article" class="h-full">
          <template #media>
            <NuxtLink class="flex pt-8 px-8" :to="article.url" target="_blank">
              <img class="w-auto h-16 object-contain object-left-bottom grayscale" :src="article.logo" :alt="`${article.title} logo`">
            </NuxtLink>
          </template>
          <template #title>
            <h2 class="flex !text-xl md:!text-2xl">
              <NuxtLink class="flex" :to="article.url" target="_blank">{{ article.title }}</NuxtLink>
            </h2>
          </template>
          <template #default>
            <p>{{ article.description }}</p>
          </template>
        </BaseCard>
      </li>
    </ContentList>
  </ul>
</template>
