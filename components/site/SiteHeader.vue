<template>
  <header class="z-40 sticky top-0 bg-primary-400/90 text-white transition-shadow backdrop-blur" :class="headerIsStuck && 'shadow-lg'">
    <div class="flex items-center space-x-12 container mx-auto py-4">
      <div class="flex-none">
        <NuxtLink class="flex" to="/">
          <img class="h-12" src="https://media.romi-project.eu/romi-web/assets/images/romi_logo_icon.svg" alt="ROMI logo" />
        </NuxtLink>
      </div>
      <nav>
        <ul class="flex flex-col md:flex-row md:space-x-6">
          <ContentNavigation v-slot="{ navigation }">
            <li v-for="link of navigation" :key="link._path" class="group relative">
              <NuxtLink class="text-current text-lg font-bold" :to="link._path">{{ link.title }}</NuxtLink>
              <div v-if="link.children" :class="['z-10 absolute top-full pt-2 -mx-4', 'opacity-0 pointer-events-none', 'group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto']">
                <ul class="py-2 px-4 min-w-max bg-white rounded shadow">
                  <li v-for="child of link.children" :key="child._path">
                    <NuxtLink class="text-lg font-bold" :to="child._path">{{ child.title }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
          </ContentNavigation>
        </ul>
      </nav>
    </div>
  </header>
  <div ref="target" />
</template>

<script setup>
const target = ref(null)
const headerIsStuck = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    headerIsStuck.value = !isIntersecting
  },
)
</script>
