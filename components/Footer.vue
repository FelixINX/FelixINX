<template>
  <div>
    <div class="bg-blue-500 text-white w-full py-4 md:py-8 space-y-8">
      <h2 class="container text-2xl md:text-4xl font-bold">
        {{ $t('footer.changeLine') }}
      </h2>
      <div class="container space-x-4">
        <slot />
      </div>
    </div>
    <div class="bg-blue-400 text-white w-full py-4 md:py-8">
      <div class="container flex">
        <p>2020 - {{ $t('footer.by') }} <b>Félix Desjardins @felixinx</b></p>
        <div class="mx-auto"></div>
        <button @click="scrollToTop">
          <fa :icon="['far', 'arrow-down']" class="transform rotate-180 mr-1" />
          {{ $t('footer.toTop') }}
        </button>
      </div>
    </div>
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
