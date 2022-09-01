<script setup lang="ts">
import { format } from 'date-fns'
import { useRouter } from 'vue-router'
import type { Episode } from '../utils/episode'

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
    px-6
    py-4
    class="episode-item"
  >
    <div flex="~" justify-between w-full font-mono>
      <span>{{ info.id }}</span>
      <span flex="~ gap-1" items-center>
        <div i-carbon-calendar />
        {{ date }}
      </span>
    </div>

    <h2
      text="20px center"
      font-500
      cursor-pointer
      @click="handleClick"
      v-html="info.title"
    />

    <episode-meta :info="info" />

    <span font-400 text-15px line-clamp-5>
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
