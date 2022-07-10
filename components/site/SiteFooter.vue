<template>
  <footer>
    <div class="container divide-y mx-auto divide-primary-900 divide-opacity-25">
      <div class="py-12" :class="['grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-7']">
        <div class="grid gap-4 content-start col-span-2">
          <NuxtLink class="w-max" to="/">
            <img class="h-12 invert" src="/assets/logo.svg" alt="ROMI logo" />
          </NuxtLink>
          <div class="">
            <p class="text-sm">Open tools for farming communities.</p>
          </div>
          <div class="flex space-x-6">
            <a v-for="item in social" :key="item.name" :href="item.href" class="">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="grid gap-2 content-start" v-for="(nav, key) in navigation" :key="key">
          <h3 class="text-sm font-semibold tracking-wider uppercase">{{ key }}</h3>
          <ul role="list" class="grid gap-1">
            <li v-for="item in nav" :key="item.name">
              <NuxtLink :to="item.href" :target="item.href && item.href.includes('://') ? '_blank' : null">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="grid gap-4 content-start col-span-2 lg:col-span-1">
          <div class="">
            <img class="h-12" src="/assets/flag-europe.svg" alt="European flag">
          </div>
          <div class="text-xs">
            <p class="">This project has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 773875.</p>
          </div>
        </div>
      </div>
      <div class="py-4">
        <p>&copy; {{ new Date().getFullYear() }} ROMI: Robotics for Microfarms.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import IconEmail from '~icons/heroicons-solid/mail'
import IconFacebook from '~icons/fa6-brands/facebook'
import IconGitHub from '~icons/fa6-brands/github'
import IconYouTube from '~icons/fa6-brands/youtube'
import IconTwitter from '~icons/fa6-brands/twitter'

const { data: tools } = await useAsyncData('tools', () => queryContent('/tools').where({ navigation: { $ne: false } }).find())
const { data: research } = await useAsyncData('research', () => queryContent('/research').where({ navigation: { $ne: false } }).find())

const navigation = {
  tools: tools.value.map(item => ({ name: item.title, href: item._path })),
  research: research.value.map(item => ({ name: item.title, href: item._path })),
  docs: [
    { name: 'Documentation', href: 'https://docs.romi-project.eu/documentation/' },
    { name: 'Topic Reports', href: '/topic-reports' },
    { name: 'Training', href: '/training' },
  ],
  project: [
    { name: 'About', href: '/about' },
    { name: 'Downloads', href: '/downloads' },
  ],
}

const social = [
  { name: 'Email', href: 'mailto:info@romi-project.eu', icon: IconEmail },
  { name: 'Twitter', href: 'https://twitter.com/ROMI_EU_Project', icon: IconTwitter },
  { name: 'Facebook', href: 'https://www.facebook.com/ROMIEUProject', icon: IconFacebook },
  { name: 'YouTube', href: 'https://www.youtube.com/watch?v=_5Zw77hQ8Sc&list=PL33KKs9g8Y1L5Dd2ZzoWJ0g19aIHrFBP8', icon: IconYouTube },
  { name: 'GitHub', href: 'https://github.com/romi', icon: IconGitHub },
]
</script>
