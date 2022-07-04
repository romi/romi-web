<template>
  <div class="not-prose">
    <ul class="grid grid-cols-2 gap-2">
      <ContentList path="/partners" v-slot="{ list }" >
        <li v-for="article in list" :key="article._path" class="px-4 py-2 bg-white rounded shadow">
          <h2 class="font-semibold">{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </li>
      </ContentList>
    </ul>
  </div>
</template>
