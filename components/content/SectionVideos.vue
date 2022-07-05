<template>
  <section class="grid gap-8">
    <slot />

    <ul v-if="items.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <li v-for="(item, key) in items" :key="key" class="grid gap-4 content-start" :class="['grid gap-8 content-start', 'bg-white rounded-lg p-8', 'overflow-hidden']">
        <figure v-if="item.id" class="-mt-8 -mx-8">
          <EmbedYoutube :id="item.id" />
        </figure>
        <div v-if="item.description">
          <p>{{ item.description }}</p>
        </div>
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
