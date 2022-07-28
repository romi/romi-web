<template>
  <NuxtLayout :key="$route.path">
    <template #default>
      <ContentDoc class="grid gap-16" />
    </template>
    <template #toc v-if="page && page.showToc">
      <SitePageNavigation v-bind="{ toc }" />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { page, toc } = useContent()
</script>
