<template>
  <section class="grid gap-8">
    <slot />

    <ul v-if="items.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <li v-for="(item, key) in items" :key="key">
        <BaseVideo v-bind="{ item }" />
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
