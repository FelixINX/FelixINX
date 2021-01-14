<template>
  <button
    class="w-8 h-8 bg-white border-6 border-blue-500 rounded-full z-10"
    @click="$emit('change-to', viewId)"
  >
    <div class="absolute top-8 pt-0.5 w-32 -ml-16">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    viewId: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
