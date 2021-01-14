<template>
  <li class="flex items-start gap-x-4">
    <div
      class="w-12 h-12 rounded-full bg-green-700 flex-none flex items-center justify-center text-white text-xl"
    >
      <fa :icon="['far', icon]" />
    </div>
    <div>
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
  },
}
</script>
