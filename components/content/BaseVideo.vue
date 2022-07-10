<template>
  <BaseCard>
    <template #media="{ className }">
      <figure v-if="item.id" :class="className">
        <EmbedYoutube class="rounded-none" :id="item.id" />
      </figure>
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
