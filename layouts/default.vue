<template>
  <div>
    <header class="bg-blue-700 dark:bg-blue-900 h-24 w-full fixed top-0 z-20">
      <div
        class="container h-full py-4 flex items-center justify-between text-white text-3xl space-x-4"
      >
        <div
          class="w-12 h-12 bg-gradient-to-bl from-green-400 to-green-600 rounded-full relative transform hover:scale-105 transition-transform group select-none"
        >
          <div
            class="absolute inset-1.5 bg-white rounded-full group-hover:opacity-0 transition-opacity"
          >
            <div
              class="leading-9 text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-orange-500 to-yellow-500 z-10"
            >
              fd
            </div>
          </div>
          <div
            class="absolute inset-1.5 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <div class="leading-9 text-xl font-bold text-center text-white">
              fd
            </div>
          </div>
        </div>
        <NuxtLink to="/" class="font-bold">@felixinx</NuxtLink>
        <div class="flex-grow"></div>
        <button
          class="w-14 h-14 relative"
          :aria-label="$t('menu.toggle')"
          @click="menu = !menu"
        >
          <fa :icon="['far', 'bars']" class="m-auto z-10 pointer-events-none" />
        </button>
      </div>
      <transition
        enter-active-class="transition ease-in duration-500"
        enter-class="opacity-0 bg-blue-600"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-out duration-150"
        leave-class="opacity-100"
        leave-to-class="opacity-0 bg-blue-600"
      >
        <div
          v-show="menu"
          class="fixed top-0 left-0 h-screen w-full z-50 bg-blue-700 text-white pt-12 px-12 space-y-12"
        >
          <h1 class="text-2xl md:text-6xl font-black container">
            Félix Desjardins
            <button
              class="float-right hover:text-blue-200"
              @click="menu = false"
            >
              <fa :icon="['far', 'times']" />
            </button>
            <p class="text-xl md:text-3xl font-bold block">@felixinx</p>
          </h1>
          <div class="container">
            <nuxt-link
              v-for="item in items"
              :key="item.href"
              :to="localePath(item.href)"
              class="flex text-lg md:text-2xl font-bold space-x-8 items-center group"
              @click.native="menu = false"
            >
              <div
                class="my-3 md:my-7 w-6 md:w-10 h-6 md:h-10 bg-orange-500 rounded-full relative"
              >
                <div
                  class="absolute w-4 md:w-6 h-4 md:h-6 rounded-full m-1 md:m-2 bg-white z-10 group-hover:bg-orange-100 transition-colors"
                  :class="{ 'bg-orange-200': $nuxt.$route.path === item.href }"
                ></div>
                <div
                  class="w-2 md:w-4 h-12 md:h-24 bg-orange-500 absolute -top-3 md:-top-7 left-2 md:left-3"
                ></div>
              </div>
              <h2
                class="flex-grow group-hover:text-orange-100 transition-colors"
                :class="{ 'text-orange-200': $nuxt.$route.path === item.href }"
              >
                {{ $t(`menu.${item.title}`) }}
                <fa class="ml-4" :icon="['far', item.icon]" />
              </h2>
            </nuxt-link>
          </div>
          <div class="space-y-4 md:space-y-0 md:space-x-8 container">
            <nuxt-link
              :to="switchLocalePath($i18n.locale === 'fr' ? 'en' : 'fr')"
              class="bg-blue-800 hover:bg-blue-900 focus:bg-blue-900 text-white p-3 md:p-4 block md:inline-block md:w-72 lg:w-80 lg:w-96 group transition-colors space-y-2"
            >
              <span class="text-sm md:text-base">Connection</span>
              <h2
                class="text-lg md:text-2xl font-bold w-full flex items-center space-x-2"
              >
                <div
                  class="w-6 md:w-8 h-6 md:h-8 bg-green-500 text-blue-900 rounded-full inline-block transition-colors text-center text-base leading-6 md:leading-8"
                >
                  <fa :icon="['far', 'globe']" />
                </div>
                <span class="flex-grow">
                  {{ $t('menu.switchLocale') }}
                </span>
                <fa
                  class="transform -rotate-45"
                  :icon="['far', 'arrow-down']"
                />
              </h2>
            </nuxt-link>
            <Connection
              icon="code"
              href="https://github.com/felixinx/felixinx"
              icon-class="bg-yellow-500"
            >
              {{ $t('menu.sourceCode') }}
            </Connection>
          </div>
        </div>
      </transition>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    menu: false,
    items: [
      {
        href: '/#about',
        title: 'aboutTitle',
        icon: 'user-tie',
      },
      {
        href: '/#projects',
        title: 'projectsTitle',
        icon: 'folders',
      },
      {
        href: '/blog',
        title: 'blogTitle',
        icon: 'newspaper',
      },
      {
        href: '/contact',
        title: 'contactTitle',
        icon: 'comment-alt-lines',
      },
    ],
    motion: {
      duration: 250,
      instantRollback: false,
    },
  }),
  head: {
    htmlAttrs: {
      class: 'scroll-smoothly scrollbar scrollbar-blue',
    },
  },
}
</script>
