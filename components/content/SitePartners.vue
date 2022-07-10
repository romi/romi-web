<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <ContentList path="/partners" v-slot="{ list }" >
      <li v-for="article in list" :key="article._path" :class="['grid gap-4 content-start', 'bg-white rounded-lg p-8']">
        <div class="flex">
          <NuxtLink class="flex" :to="article.url" target="_blank">
            <img class="w-auto h-16 object-contain object-left-bottom grayscale" :src="article.logo" :alt="`${article.title} logo`">
          </NuxtLink>
        </div>
        <div class="grid gap-2">
          <h2 class="flex !text-xl md:!text-2xl">
            <NuxtLink class="flex" :to="article.url" target="_blank">{{ article.title }}</NuxtLink>
          </h2>
          <p>{{ article.description }}</p>
        </div>
      </li>
    </ContentList>
  </ul>
</template>
