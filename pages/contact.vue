<template>
  <div>
    <div class="h-56 xl:h-96 bg-image-via bg-cover bg-center relative">
      <div
        class="absolute right-4 bottom-4 bg-yellow-300 bg-opacity-90 p-2 rounded font-semibold text-yellow-900 text-sm"
      >
        {{ $t('contact.captionVancouver') }}
      </div>
    </div>
    <div class="bg-yellow-500 py-4 md:py-8 space-y-4">
      <h1 class="text-3xl md:text-6xl container font-bold">
        {{ $t('contact.heading') }}
      </h1>
      <p class="text-xl md:text-2xl container">{{ $t('contact.intro') }}</p>
      <div class="flex flex-wrap container pt-4 gap-x-4 gap-y-4">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          target="_blank"
          class="inline-flex items-center rounded p-2 bg-gradient-to-tr from-yellow-400 to-yellow-300 group transition-all w-full md:w-auto"
        >
          <div class="rounded-full w-10 h-10 bg-black text-center">
            <fa :icon="['fab', link.icon]" class="text-2xl text-white my-2" />
          </div>
          <span class="ml-2 flex-grow text-lg">
            {{ link.name }}<b>{{ link.username }}</b>
          </span>
          <fa
            class="group-hover:ml-4 opacity-0 group-hover:opacity-100 text-lg transition-all duration-200 ease-in-out"
            :icon="['far', 'external-link']"
          ></fa>
        </a>
      </div>
    </div>
    <div class="bg-yellow-300 py-4 md:py-8 space-y-8">
      <h2 class="text-2xl md:text-4xl font-bold container">
        {{ $t('contact.byEmail') }}
      </h2>
      <form
        ref="form"
        class="container"
        name="contact-me"
        method="POST"
        data-netlify="true"
        @submit="sendForm"
      >
        <label
          for="name"
          class="md:text-lg"
          :class="{ 'opacity-25': formSent }"
        >
          {{ $t('contact.name') }}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          class="block w-2/3 lg:w-1/2 bg-yellow-200 border-0 border-b-2 border-yellow-400 focus:border-yellow-600 focus:ring-0 mb-6 mt-1 text-lg md:text-2xl p-1 md:p-2"
          :class="{ 'text-yellow-400 bg-opacity-50': formSent }"
          :disabled="formSent"
        />
        <label
          for="email"
          class="md:text-lg"
          :class="{ 'opacity-25': formSent }"
        >
          {{ $t('contact.email') }}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          class="block w-2/3 lg:w-1/2 bg-yellow-200 border-0 border-b-2 border-yellow-400 focus:border-yellow-600 focus:ring-0 mb-6 mt-1 text-lg md:text-2xl p-1 md:p-2"
          :class="{ 'text-yellow-400 bg-opacity-50': formSent }"
          :disabled="formSent"
          required
        />

        <label
          for="body"
          class="md:text-lg"
          :class="{ 'opacity-25': formSent }"
        >
          {{ $t('contact.message') }}
        </label>
        <textarea
          id="body"
          name="body"
          class="block w-full bg-yellow-200 border-0 border-b-2 border-yellow-400 focus:border-yellow-600 focus:ring-0 mb-6 mt-1 text-lg md:text-2xl p-1 md:p-2 h-16 md:h-24"
          :class="{ 'text-yellow-400 bg-opacity-50': formSent }"
          :disabled="formSent"
          required
        ></textarea>
        <button
          class="text-white font-medium py-2 px-4 transition-colors"
          :class="{
            'bg-yellow-400 text-yellow-200': formSent,
            'bg-yellow-500 hover:bg-yellow-700': !formSent,
          }"
          :disabled="formSent"
        >
          {{ $t('contact.send') }}
          <transition
            leave-class="opacity-100 translate-x-0 translate-y-0"
            leave-to-class="opacity-0 translate-x-4 -translate-y-4"
            leave-active-class="transform transition duration-1000 ease-in-out"
          >
            <fa
              v-show="!formSent"
              :icon="['far', 'paper-plane']"
              class="ml-2"
            />
          </transition>
        </button>
        <transition
          appear
          appear-class="opacity-0 translate-y-4"
          appear-to-class="opacity-100 translate-y-0"
          appear-active-class="transform transition duration-1000 ease-in-out"
        >
          <span v-if="formSent" class="text-green-700 ml-2">
            <fa :icon="['far', 'check']" class="mr-1" />
            {{ $t('contact.confirmation') }}
          </span>
        </transition>
      </form>
    </div>
    <Footer>
      <Connection href="#" icon="folders" icon-class="bg-green-500">
        {{ $t('contact.connectionProjects') }}
      </Connection>
      <Connection href="#" icon="newspaper" icon-class="bg-orange-500">
        {{ $t('home.connectionBlog') }}
      </Connection>
    </Footer>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data: () => ({
    formSent: false,
    links: [
      {
        name: 'github.com/',
        username: 'felixinx',
        icon: 'github',
        href: 'https://github.com/felixinx',
      },
      {
        name: 'instagram.com/',
        username: '_felixinx',
        icon: 'instagram',
        href: 'https://instagram.com/_felixinx',
      },
      {
        name: 'linkedin.com/in/',
        username: 'felix.desjardins',
        icon: 'linkedin',
        href: 'https://linkedin.com/in/felix.desjardins',
      },
    ],
  }),
  methods: {
    async sendForm(event) {
      await event.preventDefault()
      const formData = await new FormData(this.$refs.form)
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then((response) => {
          this.formSent = true
          console.log(response)
        })
        .catch((error) => console.log(error))
    },
  },
  head: {
    title: 'Contact',
  },
}
</script>

<style>
.bg-image-via {
  background-image: url('/img/background-via.jpg');
}
</style>
