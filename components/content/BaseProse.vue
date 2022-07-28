<template>
  <component :is="tag" class="rich-text">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})
</script>

<style lang="postcss">
.rich-text {
  @apply max-w-[60em];

  & > * + * { margin-top: 1em; }

  & :is(ol, ul, menu) {
    list-style: revert;
    margin: revert;
    padding: revert;
  }
}
</style>
