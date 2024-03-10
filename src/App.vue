<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { isShowMenu } from './utils/store-data'

useHead({
  titleTemplate: (title) => (title ? `${title} | 开源面对面` : '开源面对面'),
})
</script>

<template>
  <app-header />
  <ai-assistant />
  <router-view v-slot="{ Component }" v-show="!isShowMenu">
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
