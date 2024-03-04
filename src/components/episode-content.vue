<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useHead } from '@vueuse/head'
import { getAllEpisode } from '../utils/episode'

const episodes = getAllEpisode()

const { id } = defineProps<{ id: string }>()

const episode = computed(() => episodes.find((episode) => episode.id === id))

function isAudio(url: string) {
  const audioFormats = ['mp3', 'm4a']
  return audioFormats.some((format) => url.endsWith(`.${format}`))
}

if (episode.value)
  useHead({
    title: episode.value.title,
    meta: [
      {
        name: 'description',
        content: episode.value.description || episode.value.title || '',
      },
      { property: 'og:title', content: episode.value.title },
      {
        property: 'og:description',
        content: episode.value.description || episode.value.title || '',
      },
      {
        property: 'og:url',
        content: `https://osf2f.net/episode/${episode.value.id}`,
      },
    ],
  })
</script>

<template>
  <div v-if="episode" mx-auto mt-5 px-4 container>
    <div mb-5>
      <h1 mb-2 text-center text-2xl font-bold v-html="episode.title" />
      <div v-if="isAudio(episode.link)">
        <figure my-2 box-border>
          <audio
            controls
            :src="episode.link"
            style="width: 100%; min-width: 300px"
          >
            Your browser does not support the <code>audio</code> element.
          </audio>
        </figure>
      </div>

      <episode-meta :info="episode" justify-center />
    </div>

    <component :is="episode.default" />

    <div mt-5>
      <Giscus
        id="comments"
        repo="opensource-f2f/website"
        repo-id="R_kgDOH62a3Q"
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
