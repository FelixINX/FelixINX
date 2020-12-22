<template>
  <div
    class="h-screen w-full flex flex-col items-center justify-center space-y-8 bg-gradient-to-tr from-orange-500 to-yellow-500"
  >
    <h1 class="text-8xl font-bold text-white">
      {{ $t('error.heading') }} {{ error.statusCode }}!
    </h1>
    <button class="p-2 px-4 text-xl font-medium bg-blue-500 text-white">
      {{ $t('error.returnHome') }}
      <fa :icon="['far', 'home']" />
    </button>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
