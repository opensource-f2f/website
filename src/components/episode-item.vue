<script setup lang="ts">
import { format } from 'date-fns'
import { useRouter } from 'vue-router'
import type { EpisodeInfo } from '../typings/types'

const router = useRouter()

const { info } = defineProps<{
  info: EpisodeInfo
}>()

const date = $computed(() => format(info.date, 'yyyy-MM-dd'))

const handleClick = () => {
  router.push({ path: `/episode/${info.id}` })
}
</script>

<template>
  <div
    min-w-120px
    max-w-480px
    flex="~ col gap-2"
    items-center
    px-4
    py-6
    class="episode-item"
  >
    <div flex="~" justify-between w-full font-mono>
      <span>{{ info.id }}</span>
      <span flex="~ gap-1" items-center>
        <div i-carbon-calendar />
        {{ date }}
      </span>
    </div>

    <h2 class="title" text-20px font-500 cursor-pointer @click="handleClick">
      {{ info.title }}
    </h2>
    <div flex="~ row gap-2">
      <badge>
        <template #icon><div i-carbon-user-speaker /></template>
        {{ info.hosts.join(', ') }}
      </badge>
      <badge>
        <template #icon><div i-carbon-user-multiple /></template>
        {{ info.guests.join(', ') }}
      </badge>
    </div>

    <span class="description" font-400 text-15px>
      {{ info.description }}
    </span>
  </div>
</template>

<style scoped>
.episode-item {
  border: 1px dashed var(--border-color);
}
.title {
  color: --var(text-color);
}
.description {
  color: var(--text-color);
}
</style>
