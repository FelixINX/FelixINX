<template>
  <div
    class="flex-shrink-0 w-full h-full transform origin-center scale-100 transition-transform relative snap-align-start flex flex-col md:flex-row items-center gap-y-4 gap-x-8"
  >
    <div
      :class="[boxClass]"
      class="h-32 md:h-96 w-full md:w-72 rounded-md shadow-md relative flex-none"
    >
      <slot name="box" />
    </div>
    <div class="flex flex-col justify-center">
      <h3 class="text-lg md:text-xl font-medium">
        <slot name="title" />
      </h3>
      <p class="text-lg md:text-xl">
        <slot name="subtitle" />
      </p>
      <p class="mt-2">
        <slot />
      </p>
      <div class="flex items-center space-x-2 my-4">
        <b class="font-medium">{{ $t('projects.tech') }}</b>
        <slot name="tech" />
      </div>
      <div class="mt-4">
        <a
          :href="link"
          :class="[linkClass]"
          class="transition-colors py-2 px-4 font-medium"
        >
          {{ $t(linkText) }}
          <fa class="ml-2" :icon="['far', linkIcon]" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxClass: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    linkClass: {
      type: String,
      required: true,
    },
    linkIcon: {
      type: String,
      required: false,
      default: 'external-link',
    },
    linkText: {
      type: String,
      required: false,
      default: 'projects.visitSite',
    },
  },
}
</script>

<style scoped></style>
