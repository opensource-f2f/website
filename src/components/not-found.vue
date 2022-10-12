<script setup lang="ts">
import { isClient } from '@vueuse/core'

const path = isClient ? location.pathname : ''
</script>

<template>
  <div flex="~ col 1" items-center justify-center>
    <h1 font-500 text-10>404</h1>
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
