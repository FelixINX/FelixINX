<template>
  <div>
    <div class="w-full h-screen flex flex-col md:flex-row">
      <nuxt-link
        :to="switchLocalePath($i18n.locale === 'fr' ? 'en' : 'fr')"
        class="absolute left-0 top-0 ml-4 mt-4 w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 transition-colors ease-in-out duration-100 overflow text-center font-medium cursor-pointer leading-8 py-2 z-10"
      >
        {{ $t('default.switchLocale') }}
      </nuxt-link>
      <a
        class="absolute right-0 md:left-0 top-0 md:bottom-0 mr-4 md:ml-4 mt-4 md:mb-4 w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 transition-colors ease-in-out duration-100 overflow text-center font-medium cursor-pointer leading-8 pt-3 align-middle z-10"
      >
        <fa :icon="['fab', 'github']" class="text-2xl"></fa>
      </a>
      <div
        class="flex-1 bg-image-home bg-cover bg-center md:flex md:flex-col md:justify-center md:items-center text-white font-bold"
      >
        <div
          class="py-6 px-12 rounded-lg bg-blue-900 bg-opacity-25 bg-blur-0.5 w-full md:w-auto h-full md:h-auto flex md:block flex-col justify-center items-center"
        >
          <h1 class="text-center text-3xl">
            {{ $t('default.hello') }}
          </h1>
          <img
            class="w-32 h-32 my-8 md:my-32 rounded-full shadow-xl mx-auto"
            src="/img/profile.jpg"
            :alt="$t('default.altProfile')"
          />
          <h2 class="text-xl text-center">Félix Desjardins</h2>
          <h3 class="text-xl text-center">@felixinx</h3>
        </div>
      </div>
      <nuxt />
    </div>
  </div>
</template>

<style>
.bg-image-home {
  background-image: url('/static/img/background-bib.jpg');
}

.bg-blur-0\.5 {
  backdrop-filter: blur(0.125rem);
}
</style>
