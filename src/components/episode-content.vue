<script setup lang="ts">
import { getAllEpisode } from '../utils/episode'

const episodes = getAllEpisode()

const { id } = defineProps<{ id: string }>()

const episode = $computed(() => episodes.find((episode) => episode.id === id))
</script>

<template>
  <div v-if="episode" container mx-auto mt-5>
    <div mb-5>
      <h1 text-center text-2xl font-bold mb-2>{{ episode.title }}</h1>
      <episode-meta :info="episode" justify-center />
    </div>

    <component :is="episode.default" />
  </div>
</template>
