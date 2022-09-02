<script setup lang="ts">
import type { Episode } from '../utils/episode'

defineProps<{
  info: Episode
}>()
</script>

<template>
  <div flex="~ row gap-2 wrap" items-center justify-center>
    <person-list v-if="info.hosts?.length" :persons="info.hosts">
      <template #icon><div i-carbon-user-speaker /></template>
    </person-list>

    <person-list v-if="info.guests?.length" :persons="info.guests">
      <template #icon><div i-carbon-user /></template>
    </person-list>
  </div>
</template>
