<template>
  <BaseCard v-bind="item">
    <template #media>
      <BaseEmbed v-if="item.id" class="rounded-none" :id="item.id" />
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
