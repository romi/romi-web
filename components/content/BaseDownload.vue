<template>
  <BaseCard>
    <template #title="{ className }">
      <p :class="className">{{ title }}</p>
      <BaseBadge v-if="badge" class="ml-auto flex-none">{{ badge }}</BaseBadge>
    </template>
    <template #default>
      <p>{{ description }}</p>
    </template>
    <template #buttons>
      <template v-for="(download, key) in downloads" :key="key">
        <BaseButton :to="download.link" :variant="key === 0 ? 'primary' : 'secondary'">{{ download.label || 'Download' }}</BaseButton>
      </template>
    </template>
  </BaseCard>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  downloads: {
    type: Array,
    default: () => ([]),
  },
})
</script>
