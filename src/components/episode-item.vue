<script setup lang="ts">
import { format } from 'date-fns'
import type { Episode } from '../utils/episode'

const { info } = defineProps<{
  info: Episode
}>()

const date = computed(() => format(info.date, 'yyyy-MM-dd'))
</script>

<template>
  <div class="episode-item" flex="~ col gap-2" items-center px-6 py-4>
    <div flex="~" w-full justify-between font-mono>
      <span>{{ info.id }}</span>
      <span flex="~ gap-1" items-center>
        <div i-carbon-calendar />
        {{ date }}
      </span>
    </div>

    <router-link
      block
      text-center
      text-20px
      font-500
      underline-offset-4
      hover:underline
      class="text-[var(--text-color)]"
      :to="{ name: `Episode${info.id}` }"
    >
      <h2 v-html="info.title" />
    </router-link>

    <episode-meta :info="info" />

    <span line-clamp-5 text-15px font-400>
      {{ info.description }}
    </span>
  </div>
</template>

<style scoped>
.episode-item {
  border: 1px solid transparent;
  background:
    linear-gradient(var(--bg), var(--bg)) padding-box,
    repeating-linear-gradient(
      -45deg,
      var(--border-color) 0,
      var(--border-color) 0.5em,
      transparent 0,
      transparent 0.75em
    );
}
</style>
