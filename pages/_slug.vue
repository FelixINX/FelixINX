<template>
  <div class="flex-1">
    <back-to-home-page></back-to-home-page>
    <div class="bg-white p-4">
      <h1
        class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-yellow"
      >
        {{ page.title }}
      </h1>
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
// Todo: Convert to Typescript
export default {
  async asyncData({ params, $content }) {
    const page = await $content(params.slug).fetch()
    return { page }
  },
}
</script>

<style></style>
