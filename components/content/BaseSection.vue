<template>
  <section data-section="base" class="grid gap-8">
    <header v-if="$slots.header">
      <slot name="header" />
    </header>
    <div v-if="$slots.default" class="grid gap-12">
      <slot name="default" />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
[data-section="base"] + [data-section="base"] { @apply mt-12; }
</style>
