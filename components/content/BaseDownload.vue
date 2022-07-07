<template>
  <div :class="['grid gap-8 content-start', 'bg-white rounded-lg p-8', 'overflow-hidden']">
    <dl class="grid gap-2 content-start">
      <dt class="flex items-center">
        <p class="text-xl font-bold">{{ title }}</p>
        <p v-if="badge" class="ml-auto flex-inline px-2 py-1 text-xs text-primary-400 bg-primary-100 uppercase tracking-wide rounded">{{ badge }}</p>
      </dt>
      <dd class="grid gap-2">
        <div v-if="description || $slots.default"><slot>{{ description }}</slot></div>
        <div class="grid gap-2 mt-2">
          <template v-for="(download, key) in downloads" :key="key">
            <BaseButton :to="download.link" :variant="key === 0 ? 'primary' : 'secondary'">{{ download.label || 'Download' }}</BaseButton>
          </template>
        </div>
      </dd>
    </dl>
  </div>
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
