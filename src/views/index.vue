<script setup lang="ts">
import { getAllEpisode } from '../utils/episode'

const rawEpisodes = Object.values(getAllEpisode())

const sort = ref<'asc' | 'desc'>('desc')
const handleSort = () => {
  sort.value = sort.value === 'asc' ? 'desc' : 'asc'
}

const episodes = computed(() =>
  [...rawEpisodes].sort((a, b) => {
    if (sort.value === 'asc') {
      return a.date.getTime() - b.date.getTime()
    } else {
      return b.date.getTime() - a.date.getTime()
    }
  }),
)
</script>

<template>
  <div flex="~ col 1" px-4>
    <div flex="~ row gap-2" items-center justify-end px-6 py-2>
      <div
        :class="
          sort === 'asc'
            ? 'i-carbon-sort-descending'
            : 'i-carbon-sort-ascending'
        "
        cursor-pointer
        text-2xl
        @click="handleSort"
      />
    </div>
    <div class="episodes" grid justify-center gap-2>
      <episode-item
        v-for="episode of episodes"
        :key="episode.id"
        :info="episode"
      />
    </div>
  </div>
</template>

<style scoped>
.episodes {
  grid-template-columns: repeat(auto-fill, minmax(min(420px, 100%), 1fr));
}
</style>
