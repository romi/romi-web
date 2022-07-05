<template>
  <div :class="['grid grid-cols-1 md:grid-cols-2 gap-4 items-center content-center' /* , 'min-h-[50vh] rounded-3xl', 'bg-cover' */]">
    <div class="p-16">
      <slot name="left"></slot>
    </div>
    <div class="p-16">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
/* :deep(:is(h1, h2, h3, h4, h5, h6)) {
  @apply text-fill-white text-stroke-black text-stroke-2 paint-sfm;
  @apply text-4xl font-bold uppercase underline decoration-wavy pb-6;
} */
</style>
