<template>
  <div class="container w-full">
    <div
      class="flex overflow-x-auto space-x-6 scroll-smoothly snap-x-mandatory scrollbar-lg scrollbar-green pb-4"
    >
      <slot />
    </div>

    <!--    <div class="w-full flex items-center justify-between relative mt-4">-->
    <!--      <div-->
    <!--        class="absolute inset-0 w-full h-4 bg-blue-400 my-2 rounded-full"-->
    <!--      ></div>-->
    <!--      <div-->
    <!--        class="absolute inset-0 transition-all duration-1000 ease-in-out h-4 bg-blue-500 my-2 rounded-full"-->
    <!--        :class="{-->
    <!--          'w-1/6': current === 'tt',-->
    <!--          'w-3/6': current === 'others',-->
    <!--          'w-5/6': current === 'extras',-->
    <!--        }"-->
    <!--      ></div>-->
    <!--      <button-->
    <!--        class="w-8 h-8 bg-white border-6 border-blue-500 rounded-full z-10 relative"-->
    <!--        @click="changeTo('tt')"-->
    <!--      >-->
    <!--        <div class="absolute top-8 pt-0.5 w-32 -ml-16">-->
    <!--          Transit Tracker-->
    <!--        </div>-->
    <!--      </button>-->
    <!--      <button-->
    <!--        class="w-8 h-8 bg-white border-6 border-blue-500 rounded-full z-10"-->
    <!--        @click="changeTo('others')"-->
    <!--      >-->
    <!--        <div class="absolute top-8 pt-0.5 w-32 -ml-16">-->
    <!--          Links Manager-->
    <!--        </div>-->
    <!--      </button>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  data: () => ({
    current: 'tt',
  }),
  watch: {
    current(id) {
      const newView = document.getElementById(`view-${id}`)
      newView.scrollIntoView({ block: 'center' })
    },
  },
  methods: {
    changeTo(view) {
      this.current = view
    },
  },
}
</script>

<style scoped></style>
