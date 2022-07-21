<template>
  <div class="inline-flex">
    <component
      :is="to ? NuxtLink : 'button'"
      :to="to ? to : null"
      :target="to && to.includes('://') ? '_blank' : null"
      :class="[variant === 'primary' ? 'text-white bg-primary-400' : 'bg-transparent', 'border border-primary-400 rounded-lg px-4 py-2']"
    >
      <slot />
    </component>
  </div>
</template>

<script setup>
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>
