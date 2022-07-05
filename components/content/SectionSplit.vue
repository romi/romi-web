<template>
  <div :class="['group', 'grid grid-cols-1 md:even:grid-cols-[1fr_2fr] md:odd:grid-cols-[2fr_1fr] gap-4 items-center content-center']">
    <div class="md:group-odd:col-start-1 md:group-even:col-start-2 md:row-start-1">
      <slot name="left"></slot>
    </div>
    <div class="md:group-odd:col-start-2 md:group-even:col-start-1 md:row-start-1">
      <slot name="right"></slot>
    </div>
  </div>
</template>
