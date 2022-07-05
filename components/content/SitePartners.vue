<template>
  <div class="not-prose">
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <ContentList path="/partners" v-slot="{ list }" >
        <li v-for="article in list" :key="article._path" :class="['grid gap-4 content-start', 'bg-white rounded-lg p-8 shadow-2xl']">
          <!-- <BaseCard class="grid gap-4 content-start"> -->
            <NuxtLink class="flex" :to="article.url" target="_blank">
              <img class="w-auto h-16 object-contain" :src="article.logo" :alt="`${article.title} logo`">
            </NuxtLink>
            <div>
              <h2 class="font-semibold">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          <!-- </BaseCard> -->
        </li>
      </ContentList>
    </ul>
  </div>
</template>
