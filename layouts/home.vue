<template>
  <div>
    <div class="w-screen h-screen flex flex-col md:flex-row">
      <nuxt-link
        :to="switchLocalePath($i18n.locale === 'fr' ? 'en' : 'fr')"
        class="absolute left-0 top-0 ml-4 mt-4 w-12 h-12 rounded-full bg-green overflow text-center font-medium cursor-pointer leading-8 py-2"
      >
        {{ $t('default.switchLocale') }}
      </nuxt-link>
      <a
        class="absolute left-0 bottom-0 ml-4 mb-4 w-12 h-12 rounded-full bg-green overflow text-center font-medium cursor-pointer leading-8 pt-3 align-middle"
      >
        <fa :icon="['fab', 'github']" class="text-2xl"></fa>
      </a>
      <div
        class="flex-1 bg-image-home bg-cover bg-center flex flex-col justify-center items-center p-4 text-white font-bold"
      >
        <h1 class="text-black md:text-white text-3xl">{{ $t('default.hello') }}</h1>
        <img
          class="w-32 h-32 my-8 md:my-32 rounded-full shadow-xl"
          src="/img/profile.jpg"
          :alt="$t('default.altProfile')"
        />
        <h2 class="text-xl">Félix Desjardins</h2>
        <h3 class="text-xl">@felixinx</h3>
      </div>
      <nuxt />
    </div>
  </div>
</template>


<style>
.bg-image-home {
  background-image: url('/img/home-background.jpg');
}
</style>
