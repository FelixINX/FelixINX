<template>
  <NuxtLink class="block bg-blue text-white p-4 w-full" to="/">
    <fa class="mr-1" :icon="['far', 'arrow-left']" />
    Retourner à la page d'accueil
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BackToHomePage',
})
</script>
