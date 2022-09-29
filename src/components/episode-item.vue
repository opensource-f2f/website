<script setup lang="ts">
import { format } from 'date-fns'
import type { Episode } from '../utils/episode'

const { info } = defineProps<{
  info: Episode
}>()

const date = $computed(() => format(info.date, 'yyyy-MM-dd'))
</script>

<template>
  <div class="episode-item" flex="~ col gap-2" items-center px-6 py-4>
    <div flex="~" justify-between w-full font-mono>
      <span>{{ info.id }}</span>
      <span flex="~ gap-1" items-center>
        <div i-carbon-calendar />
        {{ date }}
      </span>
    </div>

    <router-link
      block
      text-20px
      text-center
      font-500
      hover:underline
      underline-offset-4
      class="text-[var(--text-color)]"
      :to="{ name: `Episode${info.id}` }"
    >
      <h2 v-html="info.title" />
    </router-link>

    <episode-meta :info="info" />

    <span font-400 text-15px line-clamp-5>
      {{ info.description }}
    </span>
  </div>
</template>

<style scoped>
.episode-item {
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg, #ccc 0, #ccc 0.5em, white 0, white 0.75em);
}
</style>
