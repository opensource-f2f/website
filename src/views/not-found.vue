<script setup lang="ts">
import { isClient } from '@vueuse/core'
import { useHead } from '@unhead/vue'

const path = isClient ? location.pathname : ''

useHead({
  title: '404',
})
</script>

<template>
  <div flex="~ col 1" items-center justify-center>
    <h1 text-10 font-500>404</h1>
    <p v-if="path.startsWith('/contributor')">
      Please feel free
      <a href="https://github.com/opensource-f2f/episode/tree/master/archives">
        to submit a profile
      </a>
      for it.
    </p>
    <p v-else>This page could not be found.</p>
  </div>
</template>
