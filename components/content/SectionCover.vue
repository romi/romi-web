<template>
  <div class="w-full grid gap-16 text-center mb-8">
    <div v-if="$slots.title || $slots.default" class="grid gap-8 w-full max-w-5xl mx-auto">
      <div v-if="$slots.title" class="">
        <slot name="title" />
      </div>
      <div v-if="$slots.default" class="text-primary-900/75 text-xl xl:text-3xl font-medium">
        <slot name="default" />
      </div>
    </div>
    <div v-if="$slots.media" class="w-full">
      <slot name="media" />
    </div>
  </div>
</template>

<script setup>
</script>
