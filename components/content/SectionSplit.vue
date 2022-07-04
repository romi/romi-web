<template>
  <div :class="['grid grid-cols-1 md:grid-cols-2 gap-4 items-center content-center', 'min-h-[50vh] rounded-3xl', 'bg-cover']">
    <div class="p-16">
      <slot name="left"></slot>
    </div>
    <div class="p-16">
      <slot name="right"></slot>
    </div>
  </div>
</template>
