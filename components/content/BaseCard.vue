<template>
  <div :class="[
    'grid content-start',
    'border border-primary-400/50 rounded-xl',
    'overflow-hidden isolate',
    variant === 'primary' ? 'bg-primary-100/25' : 'bg-white',
  ]">
    <slot name="media" />

    <div v-if="(title || $slots.title) || (description || $slots.default) || (buttons || $slots.buttons)" class="grid gap-4 content-start p-8">
      <div v-if="title || $slots.title" class="flex justify-between items-baseline space-x-2" :class="['text-xl md:text-2xl font-semibold']">
        <slot name="title" v-bind="{ className: ['text-xl md:text-2xl font-semibold'] }">{{ title }}</slot>
      </div>
      <BaseProse v-if="description || $slots.default">
        <slot name="default">{{ description }}</slot>
      </BaseProse>
      <div v-if="buttons || $slots.buttons" class="flex flex-wrap gap-2 text-base" :class="(description || $slots.default) && 'mt-2'">
        <slot name="buttons">
          <template v-for="(button, key) in buttons" :key="key">
            <BaseButton :to="button.link" :variant="key === 0 ? 'primary' : 'secondary'">{{ button.label }}</BaseButton>
          </template>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  buttons: {
    type: Array,
    default: null,
  },
  variant: {
    type: String,
    default: 'default',
  },
})
</script>

<style lang="postcss" scoped>
img { @apply w-full h-full object-cover; }
</style>
