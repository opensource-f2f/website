<script setup lang="ts">
import { getAllEpisode } from '../utils/episode'

const episodes = getAllEpisode()

const { id } = defineProps<{ id: string }>()

const episodeModule = $computed(() =>
  episodes.find((episode) => episode.id === id)
)
</script>

<template>
  <div container mx-auto>
    <component :is="episodeModule.default" v-if="episodeModule" />
  </div>
</template>
