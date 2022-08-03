<template>
  <BaseCard v-bind="item">
    <template #media>
      <BaseEmbed v-if="item.id" class="-mt-px -mx-px rounded-none" :id="item.id" />
    </template>
  </BaseCard>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
