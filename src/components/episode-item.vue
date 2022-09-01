<script setup lang="ts">
import { format } from 'date-fns'
import { useRouter } from 'vue-router'
import type { Episode } from '../typings/types'

const router = useRouter()

const { info } = defineProps<{
  info: Episode
}>()

const date = $computed(() => format(info.date, 'yyyy-MM-dd'))

const handleClick = () => {
  router.push({ name: `Episode${info.id}` })
}
</script>

<template>
  <div
    min-w-300px
    max-w-480px
    flex="~ col gap-2 1"
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

    <h2 text-20px font-500 cursor-pointer @click="handleClick">
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

    <span font-400 text-15px>
      {{ info.description }}
    </span>
  </div>
</template>

<style scoped>
.episode-item {
  border: 1px dashed var(--border-color);
  margin: 0px -1px -1px 0px;
}
</style>
