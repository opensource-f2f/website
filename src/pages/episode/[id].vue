<script setup lang="ts">
import { getAllEpisode } from '../../utils/episode'
import type { EpisodeModule } from '../../typings/types'

const episodes: Record<string, EpisodeModule> = getAllEpisode()
const episodeModule = $computed(() => episodes[id])

const { id } = defineProps<{ id: string }>()
</script>

<template>
  <div container mx-auto>
    <component :is="episodeModule.default" v-if="episodeModule" />
  </div>
</template>
