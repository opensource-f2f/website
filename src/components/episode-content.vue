<script setup lang="ts">
import { getAllEpisode } from '../utils/episode'

const episodes = getAllEpisode()

const { id } = defineProps<{ id: string }>()

const episode = $computed(() => episodes.find((episode) => episode.id === id))
</script>

<template>
  <div v-if="episode" container mx-auto px-4 mt-5>
    <div mb-5>
      <h1 text-center text-2xl font-bold mb-2 v-html="episode.title" />
      <div flex justify-center my-2>
        <a :href="episode.link" target="_blank">
          <img title="喜马拉雅" src="../assets/xmly.png" w-20px />
        </a>
      </div>

      <episode-meta :info="episode" justify-center />
    </div>

    <component :is="episode.default" />
  </div>
</template>
