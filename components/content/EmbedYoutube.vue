<template>
  <div class="aspect-w-16 aspect-h-9">
    <template v-if="isActive">
      <iframe :src="`https://www.youtube.com/embed/${id}?autoplay=1`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </template>
    <template v-else>
      <img class="object-cover" :src="`http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`" alt="">
      <button class="group flex justify-center items-center" @click="isActive = !isActive">
        <div class="w-20 h-w-20 rounded-full bg-primary-400/75 group-hover:scale-105 group-focus:scale-105 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-primary-50" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
        </div>
      </button>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const isActive = ref(false)
</script>
