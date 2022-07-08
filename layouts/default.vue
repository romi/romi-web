<template>
  <article>
    <slot />
  </article>
</template>

<style lang="postcss" scoped>
:deep(:is(h1, h2, h3, h4, h5, h6)) { @apply text-primary-400 font-bold; }
:deep(:is(h1)) { @apply text-4xl xl:text-6xl; }
:deep(:is(h2)) { @apply text-3xl xl:text-5xl; }
:deep(:is(h3)) { @apply text-2xl xl:text-4xl; }
:deep(:is(h4)) { @apply text-xl xl:text-3xl; }
:deep(:is(h5)) { @apply text-lg xl:text-2xl; }
:deep(:is(h6)) { @apply text-base xl:text-xl; }
</style>
