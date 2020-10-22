<template>
  <div class="container mx-auto">
    <div class="bg-white p-4">
      <h1
        class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange to-yellow mb-4"
      >
        Me contacter
      </h1>

      <div class="flex overflow-auto">
        <a
          class="mr-2 inline-flex items-center rounded p-2 bg-gradient-to-r from-orange to-yellow group transition-all duration-200 ease-in-out"
          href="https://github.com/felixinx"
        >
          <div class="rounded-full w-10 h-10 bg-black text-center">
            <fa :icon="['fab', 'github']" class="text-2xl text-white my-2" />
          </div>
          <span class="ml-2 flex-grow text-lg">github.com/<b>felixinx</b></span>
          <fa
            class="group-hover:ml-4 opacity-0 group-hover:opacity-100 text-lg transition-all duration-200 ease-in-out"
            :icon="['far', 'external-link']"
          ></fa>
        </a>

        <a
          class="mr-2 inline-flex items-center rounded p-2 bg-gradient-to-r from-orange to-yellow group transition-all duration-200 ease-in-out"
          href="https://instageram.com/_felixinx"
        >
          <div class="rounded-full w-10 h-10 bg-black text-center">
            <fa :icon="['fab', 'instagram']" class="text-2xl text-white my-2" />
          </div>
          <span class="ml-2 flex-grow text-lg"
            >instagram.com/<b>_felixinx</b></span
          >
          <fa
            class="group-hover:ml-4 opacity-0 group-hover:opacity-100 text-lg transition-all duration-200 ease-in-out"
            :icon="['far', 'external-link']"
          ></fa>
        </a>

        <a
          class="mr-2 inline-flex items-center rounded p-2 bg-gradient-to-r from-orange to-yellow group transition-all duration-200 ease-in-out"
          href="https://github.com/felixinx"
        >
          <div class="rounded-full w-10 h-10 bg-black text-center">
            <fa :icon="['fab', 'github']" class="text-2xl text-white my-2" />
          </div>
          <span class="ml-2 flex-grow text-lg">github.com/<b>felixinx</b></span>
          <fa
            class="group-hover:ml-4 opacity-0 group-hover:opacity-100 text-lg transition-all duration-200 ease-in-out"
            :icon="['far', 'external-link']"
          ></fa>
        </a>

        <a
          class="inline-flex items-center rounded p-2 bg-gradient-to-r from-orange to-yellow group transition-all duration-200 ease-in-out"
          href="https://github.com/felixinx"
        >
          <div class="rounded-full w-10 h-10 bg-black text-center">
            <fa :icon="['fab', 'github']" class="text-2xl text-white my-2" />
          </div>
          <span class="ml-2 flex-grow text-lg">github.com/<b>felixinx</b></span>
          <fa
            class="group-hover:ml-4 opacity-0 group-hover:opacity-100 text-lg transition-all duration-200 ease-in-out"
            :icon="['far', 'external-link']"
          ></fa>
        </a>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
