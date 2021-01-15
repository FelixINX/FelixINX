<template>
  <article class="mt-8 md:mt-24">
    <div class="bg-orange-500 text-white py-4 md:py-8 space-y-4">
      <h1 class="text-3xl md:text-6xl container font-bold">
        {{ page.title }}
      </h1>
      <p class="text-xl md:text-2xl container font-medium">
        {{ page.description }}
      </p>
    </div>
    <div
      class="h-56 md:h-72 xl-h-96 bg-cover bg-center bg-fixed"
      :lazy-background="require(`~/static/img/blog/${page.header}`)"
    ></div>
    <div class="bg-orange-50 text-orange-900 py-4 md:py-8">
      <Nuxt-Content
        :document="page"
        class="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
      />
    </div>
    <Footer>
      <Connection to="/" icon="folders" icon-class="bg-green-500">
        {{ $t('blog.connectionAbout') }}
      </Connection>
      <Connection
        to="/contact"
        icon="comment-alt-lines"
        icon-class="bg-yellow-500"
      >
        {{ $t('home.connectionContact') }}
      </Connection>
    </Footer>
  </article>
</template>

<script>
export default {
  async asyncData({ app, params, $content }) {
    const page = await $content(`${app.i18n.locale}/${params.slug}`).fetch()
    return { page }
  },
}
</script>

<style></style>
