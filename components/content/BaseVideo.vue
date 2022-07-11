<template>
  <BaseCard>
    <template #media>
      <EmbedYoutube v-if="item.id" class="rounded-none" :id="item.id" />
    </template>
    <template v-if="item.description" #default>
      <p>{{ item.description }}</p>
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
