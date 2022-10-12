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
      <div
        style="
          align: center;
          justify-content: center;
          display: flex;
          margin: 10px;
        "
      >
        <a :href="`${episode.link}`" target="_blank">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTP8xAPooAPopAPspAP8tAPopAPooAPooAPooAPooAPooAP7+/vtvVfo+G/pAHfyciv3DuftiRf7h3PyKdftPL/tdP/7Ty/7s6fymlftoTfx9ZfozDfo/HP24q4bX9WMAAAALdFJOUwAatptOHNls8/3yOBb+cAAAAR5JREFUeNrtl9tugzAMQA0UkjRdt5Zwbcv/f+a8EtXQCKm2pT1xnmInR5HyENsQKU1eWf8BtspNCUuywnkGrsjIPVjP5HiAiHGejTPxXnQF9vPuzHoRxwzlwgspAEonlV0JxosxkMvlHCq5XIGVyxZWYahPkTrMmVvMED0dh5W7PBSe7ilh2JBXt9SUWTLdN2Tc68YWGTtcxkx/uy54eCKRm3nVkBx8wpb8Pa/OJH/t8j/K088bDDmh08gtR+4uLzCaGtmDxWiXd3mXeXIjkqnc/PkPpkxlDX+pFgsdUw6vX2rCGsWQqbj343mIxZ1egaJETqDjl7eIIffDPYkIVUOjaqVUTZyqfVQ1rpqWWdWsa8YEzYCiGY3UQ5lqHPwFuPGboDCx3UAAAAAASUVORK5CYII="
            width="20"
            height="20"
            mobile_small="30"
          />
        </a>
      </div>

      <episode-meta :info="episode" justify-center />
    </div>

    <component :is="episode.default" />
  </div>
</template>
