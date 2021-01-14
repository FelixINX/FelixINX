<template>
  <component
    :is="component"
    :href="to ? false : href"
    :to="to ? localePath(to) : false"
    class="text-white p-3 md:p-4 inline-block w-full md:w-72 lg:w-80 xl:w-96 transition-colors space-y-2 group cursor-pointer"
    :class="[backgroundClass, `hover:${hoverClass} focus:${hoverClass}`]"
  >
    <span class="text-sm md:text-base">
      {{ selfConnectionText }}
    </span>
    <h2
      class="text-lg md:text-2xl font-bold w-full flex items-center space-x-2"
    >
      <div
        v-if="icon"
        class="w-6 md:w-8 h-6 md:h-8 text-blue-900 rounded-full inline-block transition-colors text-center text-sm md:text-base leading-6 md:leading-8"
        :class="[iconClass]"
      >
        <fa :icon="['far', icon]" />
      </div>
      <span class="flex-grow">
        <slot />
      </span>
      <fa :icon="['far', 'arrow-down']" class="transform -rotate-45" />
    </h2>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      required: false,
      type: String,
      default: '#',
    },
    to: {
      required: false,
      type: String,
      default: null,
    },
    connectionText: {
      required: false,
      type: String,
      default: null,
    },
    icon: {
      required: false,
      type: String,
      default: null,
    },
    iconClass: {
      required: false,
      type: String,
      default: 'bg-yellow-500',
    },
    backgroundClass: {
      required: false,
      type: String,
      default: 'bg-blue-800',
    },
    hoverClass: {
      required: false,
      type: String,
      default: 'bg-blue-900',
    },
  },
  data: () => ({
    selfConnectionText: '',
    component: 'a',
  }),
  created() {
    if (this.connectionText) {
      this.selfConnectionText = this.connectionText
    } else {
      this.selfConnectionText = this.$t('connection.heading')
    }

    if (this.to) {
      this.component = 'NuxtLink'
    }
  },
}
</script>

<style scoped></style>
