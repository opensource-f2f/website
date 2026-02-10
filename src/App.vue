<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { isShowMenu } from './utils/menu'

useHead({
  titleTemplate: (title) => (title ? `${title} | 开源面对面` : '开源面对面'),
})
</script>

<template>
  <div :class="{ 'overflow-hidden': isShowMenu }">
    <app-header />
    <router-view v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </router-view>
    <app-footer />
  </div>
</template>
