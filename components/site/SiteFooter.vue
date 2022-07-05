<template>
  <footer>
    <div class="container divide-y mx-auto divide-current">
      <div class="py-12" :class="['grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-6']">
        <div class="col-span-1 grid gap-4 content-start">
          <NuxtLink class="" to="/">
            <img class="h-16 invert" src="https://media.romi-project.eu/romi-web/assets/images/romi_logo_icon.svg" alt="ROMI logo" />
          </NuxtLink>
          <div class="">
            <p class="">Open tools for farming communities.</p>
          </div>
          <div class="flex space-x-6">
            <a v-for="item in social" :key="item.name" :href="item.href" class="">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="grid gap-2 content-start" v-for="(nav, key) in navigation" :key="key">
          <h3 class="font-semibold tracking-wider uppercase">{{ key }}</h3>
          <ul role="list" class="grid gap-1">
            <li v-for="item in nav" :key="item.name">
              <a :href="item.href" class="text-base">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="grid gap-2 content-start">
          <div class="w-24">
            <img class="" src="https://romi-project.eu/assets/images/eu_flag.svg" alt="European flag">
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
    { name: 'About', href: 'https://docs.romi-project.eu/about/' },
    { name: 'Documentation', href: 'https://docs.romi-project.eu/documentation/' },
    { name: 'Research', href: 'https://docs.romi-project.eu/research/' },
    { name: 'Training', href: 'https://docs.romi-project.eu/training/' },
    { name: 'Data', href: 'https://docs.romi-project.eu/data/' },
    { name: 'Glossary', href: 'https://docs.romi-project.eu/glossary/' },
  ],
  company: [
    { name: 'About', href: 'about' },
    { name: 'Documents', href: 'https://media.romi-project.eu/documents/' },
    { name: 'Data', href: 'https://media.romi-project.eu/data/' },
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
