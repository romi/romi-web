<template>
  <div class="bg-white rounded-lg p-8 shadow-2xl">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
:deep(:is(h1, h2, h3, h4, h5, h6)) {
  @apply text-fill-white text-stroke-black text-stroke-2 paint-sfm;
  @apply text-4xl font-bold uppercase underline decoration-wavy pb-6;
}
</style>
