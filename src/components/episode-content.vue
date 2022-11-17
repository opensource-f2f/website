<script setup lang="ts">
import Giscus from '@giscus/vue'
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

    <div mt-5>
      <Giscus
        id="comments"
        repo="opensource-f2f/website"
        repo-id="R_kgDOH62a3Q="
        category="General"
        category-id="DIC_kwDOH62a3c4CR4dr"
        mapping="pathname"
        term="欢迎来到《开源面对面》"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        crossorigin="anonymous"
        loading="lazy"
      />
    </div>
  </div>
</template>
