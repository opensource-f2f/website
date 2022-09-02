<script setup lang="ts">
import { getAllEpisode } from '../utils/episode'

const rawEpisodes = Object.values(getAllEpisode())

let sort = $ref<'asc' | 'desc'>('desc')
const handleSort = () => {
  sort = sort === 'asc' ? 'desc' : 'asc'
}

const episodes = $computed(() =>
  [...rawEpisodes].sort((a, b) => {
    if (sort === 'asc') {
      return a.date.getTime() - b.date.getTime()
    } else {
      return b.date.getTime() - a.date.getTime()
    }
  })
)
</script>

<template>
  <div flex="~ row gap-2" justify-end items-center px-6 py-2>
    <div
      :class="
        sort === 'asc' ? 'i-carbon-sort-descending' : 'i-carbon-sort-ascending'
      "
      cursor-pointer
      text-2xl
      @click="handleSort"
    />
  </div>
  <div
    grid
    gap-2
    justify-center
    style="grid-template-columns: repeat(auto-fill, 500px)"
  >
    <episode-item
      v-for="episode of episodes"
      :key="episode.id"
      :info="episode"
    />
  </div>
</template>
