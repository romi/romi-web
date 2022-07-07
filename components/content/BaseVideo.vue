<template>
  <div :class="['grid gap-8 content-start', 'bg-white rounded-lg p-8', 'overflow-hidden']">
    <figure v-if="item.id" class="-mt-8 -mx-8">
      <EmbedYoutube :id="item.id" />
    </figure>
    <div v-if="item.description">
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
