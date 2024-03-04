<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { getAllContributors } from '../utils/contributor'

const contributors = getAllContributors()

const { github } = defineProps<{
  github: string
}>()

const contributor = computed(() =>
  contributors.find((contributor) => contributor.github === github)
)

if (contributor.value)
  useHead({
    title: contributor.value.name,
    meta: [
      { property: 'og:title', content: contributor.value.name },
      {
        property: 'og:url',
        content: `https://osf2f.net/contributor/${contributor.value.github}`,
      },
    ],
  })
</script>

<template>
  <div v-if="contributor" mx-auto mt-5 px-4 container>
    <div mb-5>
      <h1 mb-2 text-center text-2xl font-bold v-html="contributor.name" />

      <a :href="`https://github.com/${contributor.github}`" target="_blank">
        <img
          :src="`https://avatars.githubusercontent.com/${contributor.github}`"
          :alt="contributor.github"
          class="w-128px"
        />
      </a>

      <span v-if="contributor.twitter">
        Twitter:
        <a :href="`https://twitter.com/${contributor.twitter}`" target="_blank">
          {{ contributor.twitter }}
        </a>
      </span>

      <component :is="contributor.default" />

      <span v-if="contributor.audios">
        Podcast List:
        <li v-for="audio in contributor.audios" :key="audio.title">
          <a :href="`${audio.link}`" target="_blank">{{ audio.title }}</a>
        </li>
      </span>

      <span v-if="contributor.videos">
        Video List:
        <li v-for="video in contributor.videos" :key="video.title">
          <a :href="`${video.link}`" target="_blank">{{ video.title }}</a>
        </li>
      </span>
    </div>
  </div>
</template>
