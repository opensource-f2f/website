<script setup lang="ts">
import { getAllContributors } from '../utils/contributor'

const contributors = getAllContributors()

const { github } = defineProps<{ github: string }>()

const contributor = $computed(() =>
  contributors.find((contributor) => contributor.github === github)
)
</script>

<template>
  <div v-if="contributor" container mx-auto px-4 mt-5>
    <div mb-5>
      <h1 text-center text-2xl font-bold mb-2 v-html="contributor.name" />

      <a :href="`https://github.com/${contributor.github}`" target="_blank">
        <img
          :src="`https://avatars.githubusercontent.com/${contributor.github}`"
          :alt="`${contributor.github}`"
          size="128"
          height="128"
          width="128"
          data-view-component="true"
          class="avatar"
        />
      </a>

      <span v-if="contributor.twitter">
        Twitter:
        <a
          :href="`https://twitter.com/${contributor.twitter}`"
          target="_blank"
          >{{ contributor.twitter }}</a
        >
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
