<template>
  <div class="grid gap-16">
    <ContentDoc class="my-32" />

    <section v-for="([title, query]) in [['Tools', '/tools'], ['Research', '/research']]" :key="query" class="grid gap-8">
      <header>
        <h2 class="text-6xl text-primary-400 font-bold">
          <NuxtLink :to="query">{{ title }}</NuxtLink>
        </h2>
      </header>
      <div>
        <SectionGrid v-bind="{ query }" />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

const content = useContent()
</script>
