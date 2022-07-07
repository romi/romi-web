<template>
  <div :class="['group', 'grid grid-cols-1 md:even:grid-cols-[3fr_4fr] md:odd:grid-cols-[4fr_3fr] gap-4 items-center content-center']">
    <div class="md:group-odd:col-start-1 md:group-even:col-start-2 md:row-start-1">
      <slot name="left"></slot>
    </div>
    <div class="md:group-odd:col-start-2 md:group-even:col-start-1 md:row-start-1">
      <slot name="right"></slot>
    </div>
  </div>
</template>
