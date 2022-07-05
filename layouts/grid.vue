<template>
  <article class="">
    <slot />

    <SectionGrid v-bind="{ query: $route.path }" />
  </article>
</template>

<style lang="postcss" scoped>
:deep(:is(h1, h2, h3, h4, h5, h6)) { @apply text-primary-400 font-bold; }
:deep(:is(h1)) { @apply text-6xl; }
:deep(:is(h2)) { @apply text-5xl; }
:deep(:is(h3)) { @apply text-4xl; }
:deep(:is(h4)) { @apply text-3xl; }
:deep(:is(h5)) { @apply text-2xl; }
:deep(:is(h6)) { @apply text-xl; }
</style>
