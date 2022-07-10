<template>
  <div :class="['grid gap-8 content-start', 'bg-white rounded-lg p-8', 'overflow-hidden']">
    <slot name="media" v-bind="{ className: 'flex -mt-8 -mx-8' }" />

    <div class="grid gap-2 content-start">
      <div v-if="title || $slots.title" class="flex items-baseline">
        <slot name="title" v-bind="{ className: 'text-xl font-bold' }">{{ title }}</slot>
      </div>
      <div class="grid gap-2">
        <div v-if="description || $slots.description">
          <slot name="description">{{ description }}</slot>
        </div>
        <div v-if="buttons || $slots.buttons" class="flex flex-wrap gap-2 mt-2">
          <slot name="buttons">
            <template v-for="(button, key) in buttons" :key="key">
              <BaseButton :to="buttons.link" :variant="key === 0 ? 'primary' : 'secondary'">{{ buttons.label }}</BaseButton>
            </template>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
