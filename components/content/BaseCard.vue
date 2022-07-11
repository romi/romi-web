<template>
  <div :class="['grid content-start', 'bg-white rounded-xl', 'overflow-hidden isolate']">
    <slot name="media" />

    <div v-if="(title || $slots.title) || (description || $slots.default) || (buttons || $slots.buttons)" class="grid gap-2 content-start p-8">
      <div v-if="title || $slots.title" class="flex items-baseline">
        <slot name="title" v-bind="{ className: 'text-xl font-bold' }">{{ title }}</slot>
      </div>
      <div class="grid gap-2">
        <div v-if="description || $slots.default">
          <slot name="default">{{ description }}</slot>
        </div>
        <div v-if="buttons || $slots.buttons" class="flex flex-wrap gap-2 mt-2">
          <slot name="buttons">
            <template v-for="(button, key) in buttons" :key="key">
              <BaseButton :to="buttons.link" :variant="key === 0 ? 'primary' : 'secondary'">{{ buttons.label }}</BaseButton>
            </template>
          </slot>
        </div>
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
})
</script>
