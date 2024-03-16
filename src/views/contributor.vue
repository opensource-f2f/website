<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { getAllContributors } from '../utils/contributor'

const contributors = getAllContributors()

const { github } = defineProps<{
  github: string
}>()

const contributor = computed(() =>
  contributors.find((contributor) => contributor.github === github),
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
  <div v-if="contributor" mx10>
    <div flex="~ col items-center">
      <!-- avatars -->
      <img
        :src="`https://avatars.githubusercontent.com/${contributor.github}`"
        :alt="contributor.name"
        my5
        w-100px
        rd-3
      />

      <!-- name -->
      <h1 text-2xl font-bold v-html="contributor.name" />

      <!-- title -->
      <span v-if="contributor.title">{{ contributor.title }}</span>

      <!-- social -->
      <div flex="~ row gap-2 wrap justify-center">
        <span v-if="contributor.github" flex="~  items-center">
          <div i-carbon-logo-github text="[var(--text-color)]" mr1 />
          <a :href="`https://github.com/${contributor.github}`" target="_blank">
            {{ contributor.github }}
          </a>
        </span>
        <span v-if="contributor.twitter" flex="~  items-center">
          <div i-carbon-logo-x text="[var(--text-color)]" mr1 />
          <a
            :href="`https://twitter.com/${contributor.twitter}`"
            target="_blank"
          >
            {{ contributor.twitter }}
          </a>
        </span>
      </div>

      <!-- history -->
      <div mt5>
        <div v-if="contributor.audios">
          Podcast List:
          <li v-for="audio in contributor.audios" :key="audio.title">
            <a :href="`${audio.link}`" target="_blank" break-all>{{
              audio.title
            }}</a>
          </li>
        </div>
        <div v-if="contributor.videos" mt2>
          Video List:
          <li v-for="video in contributor.videos" :key="video.title">
            <a :href="`${video.link}`" target="_blank" break-all>{{
              video.title
            }}</a>
          </li>
        </div>
      </div>

      <!-- profile -->
      <div mt5 pb10 pt5 container border-y="1px solid [var(--border-color)]">
        <component :is="contributor.default" />
      </div>
    </div>
  </div>
</template>
