<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  titleTemplate: (title) => (title ? `${title} | 开源面对面` : '开源面对面'),
})
</script>

<template>
  <app-header />
  <router-view v-slot="{ Component }">
    <Transition>
      <component :is="Component" />
    </Transition>
  </router-view>
  <app-footer />
</template>

<style scoped>
.v-enter-active {
  transition: opacity 0.3s ease-in;
}

.v-enter-from {
  opacity: 0;
}
</style>
