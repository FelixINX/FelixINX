<template>
  <div>
    <div
      class="h-56 xl:h-96 bg-cover bg-center"
      :lazy-background="require('~/static/img/background-jasper.jpg')"
    ></div>
    <div class="bg-orange-500 text-white py-4 md:py-8 space-y-4">
      <h1 class="text-3xl md:text-6xl container font-bold">
        {{ $t('blog.heading') }}
      </h1>
      <p class="text-xl md:text-2xl container">
        {{ $t('blog.intro') }}
      </p>
    </div>
    <div class="bg-orange-200 py-4 md:py-8 space-y-16 hidden">
      <div
        v-for="post in posts"
        :key="post.slug"
        class="container flex items-start gap-x-8"
      >
        <div
          :lazy-background="require(`~/static/img/blog/${post.header}`)"
          class="w-1/4 h-40 min-h-full bg-center bg-cover rounded-xl shadow-xl"
        />
        <div class="space-y-4 flex-1">
          <h2 class="text-2xl md:text-4xl font-bold leading-10 transition-all">
            {{ post.title }}
          </h2>
          <p class="text-lg">
            {{ post.description }}
            <NuxtLink :to="`/blog/${post.slug}`" class="underline font-medium">
              {{ $t('blog.readMore') }} &#8250;
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <div class="bg-orange-100 py-4 md:py-8">
      <p class="text-xl md:text-2xl font-bold container">
        {{ $t('blog.soon') }}
      </p>
    </div>
    <Footer>
      <Connection
        to="/"
        icon="folders"
        icon-class="bg-green-500"
        hover-class="bg-blue-600"
      >
        {{ $t('blog.connectionAbout') }}
      </Connection>
      <Connection
        to="/contact"
        icon="comment-alt-lines"
        icon-class="bg-yellow-500"
        hover-class="bg-blue-600"
      >
        {{ $t('home.connectionContact') }}
      </Connection>
    </Footer>
  </div>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const posts = await $content(`${app.i18n.locale}`).fetch()
    return { posts }
  },
  head() {
    return {
      title: this.$t('blog.heading'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('blog.intro'),
        },
      ],
    }
  },
}
</script>
