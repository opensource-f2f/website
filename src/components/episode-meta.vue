<script setup lang="ts">
import type { Episode } from '../utils/episode'

defineProps<{
  info: Episode
}>()
</script>

<template>
  <div flex="~ row gap-2">
    <badge v-if="info.hosts?.length">
      <template #icon><div i-carbon-user-speaker /></template>
      <person-list :persons="info.hosts" />
    </badge>
    <badge v-if="info.guests?.length">
      <template #icon><div i-carbon-user-multiple /></template>
      <person-list :persons="info.guests" />
    </badge>
  </div>
</template>
