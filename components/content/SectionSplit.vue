<template>
  <div :class="['group', 'grid grid-cols-1 md:even:grid-cols-[3fr_4fr] md:odd:grid-cols-[4fr_3fr] gap-8 items-center content-center', 'max-w-7xl mx-auto']">
    <div class="md:group-odd:col-start-1 md:group-even:col-start-2 md:row-start-1">
      <slot name="media"></slot>
    </div>
    <div class="md:group-odd:col-start-2 md:group-even:col-start-1 md:row-start-1">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
:deep(img) { @apply w-full h-full object-cover rounded-xl; }
</style>
