<template>
  <div>
    <div class="bg-blue-900 text-white w-full py-4 md:py-8 space-y-8">
      <h2 class="container text-2xl md:text-4xl font-bold">
        {{ $t('footer.changeLine') }}
      </h2>
      <div class="container space-y-4 md:space-y-0 md:space-x-4">
        <slot />
      </div>
    </div>
    <div class="bg-blue-800 text-white w-full py-4 md:py-6">
      <div class="container flex">
        <p>2020 - {{ $t('footer.by') }} <b>Félix Desjardins @felixinx</b></p>
        <div class="mx-auto"></div>
        <button class="flex items-center" @click="scrollToTop">
          <fa :icon="['far', 'arrow-down']" class="transform rotate-180 mr-1" />
          <span class="hidden md:block">{{ $t('footer.toTop') }}</span>
        </button>
      </div>
    </div>
    <div
      class="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500"
    ></div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
