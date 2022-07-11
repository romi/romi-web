<template>
  <section
    data-section="split-hero"
    :class="[
      'pt-[40vh] _xl:sticky _xl:top-[20vh] xl:min-h-[60vh]',
      'grid grid-cols-1 xl:grid-cols-2 p-4 xl:p-16 gap-4 xl:gap-16 items-center content-end xl:content-center',
      'rounded-3xl bg-cover',
      $slots.left && 'bg-right',
      $slots.right && 'bg-left',
    ]"
  >
    <div v-if="$slots.left" class="xl:col-start-1">
      <slot name="left"></slot>
    </div>
    <div v-if="$slots.right" class="xl:col-start-2">
      <slot name="right"></slot>
    </div>
    <div v-if="$slots.center" class="xl:col-span-2">
      <slot name="center"></slot>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
:deep(:is(h1, h2, h3, h4, h5, h6)) {
  @apply !text-[200%]
}
/* :deep(:is(h1)) { @apply !text-5xl; }
:deep(:is(h2)) { @apply !text-4xl; }
:deep(:is(h3)) { @apply !text-3xl; }
:deep(:is(h4)) { @apply !text-2xl; }
:deep(:is(h5)) { @apply !text-xl; }
:deep(:is(h6)) { @apply !text-lg; } */
:deep(p) { @apply xl:text-lg; }
:deep(* + p) { @apply mt-[1em]; }
</style>
