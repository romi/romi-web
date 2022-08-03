<template>
  <div class="w-full grid gap-16 mb-8">
    <div v-if="$slots.title || $slots.default" class="grid gap-8 w-full max-w-4xl">
      <div v-if="$slots.title">
        <slot name="title" />
      </div>
      <div v-if="$slots.default" class="text-xl md:text-2xl xl:text-3xl">
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
