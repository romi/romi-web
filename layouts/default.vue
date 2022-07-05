<template>
  <article>
    <slot />
  </article>
</template>

<style lang="postcss" scoped>
:deep(:is(h1, h2, h3, h4, h5, h6)) {
  /* @apply text-fill-white text-stroke-black text-stroke-2 paint-sfm; */
  @apply text-4xl md:text-6xl text-primary-400 font-bold;
}
</style>
