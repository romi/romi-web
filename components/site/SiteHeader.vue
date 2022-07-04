<template>
  <header class="z-40 sticky top-0 bg-inherit">
    <div class="container mx-auto">
      <div>

      </div>
      <nav>
        <ul class="flex space-x-6">
          <ContentNavigation v-slot="{ navigation }">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
              <ul class="list-disc pl-4">
                <li v-for="child of link.children" :key="child._path">
                  <NuxtLink :to="child._path">{{ child.title }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ContentNavigation>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>
