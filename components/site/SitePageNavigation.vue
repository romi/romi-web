<template>
  <BaseProse v-if="toc.links" class="sticky top-48 self-start leading-tight" tag="nav">
    <p class="text-sm font-semibold tracking-wider uppercase">Table of Contents</p>
    <ul class="!pl-4 space-y-2" _class="!list-none">
      <li :key="link.text" v-for="link in toc.links" class="space-y-2">
        <a :href="`#${link.id}`">{{ link.text }}</a>
        <ul v-if="link.children" class="!pl-4 space-y-2">
          <li v-for="child of link.children" :key="child.id">
            <a :href="`#${child.id}`">{{ child.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </BaseProse>
</template>

<script setup lang="ts">
const props = defineProps({
  toc: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>
