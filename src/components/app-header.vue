<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header
    flex="~ row none"
    relative
    h-240px
    w-full
    justify-center
    style="background: var(--header-bg)"
  >
    <div flex="~ col gap-16px" items-center justify-center>
      <router-link :to="{ name: 'Index' }">
        <img
          h-100px
          w-100px
          rounded-2
          src="/static/logo.png"
          alt="开源面对面"
        />
      </router-link>
      <span>开源面对面，连接热爱开源的你！</span>

      <div flex="~ row gap-2" flex-wrap justify-center>
        <a target="_blank" href="https://github.com/opensource-f2f">
          <img
            alt="GitHub Org's stars"
            src="https://img.shields.io/github/stars/opensource-f2f?style=social"
          />
        </a>
        <a target="_blank" href="https://twitter.com/osf2f">
          <img
            alt="Twitter followers"
            src="https://img.shields.io/twitter/follow/osf2f?style=social"
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCV7Ibg1k_aMSEcDFgJvuvdg"
        >
          <img
            alt="YouTube subscribers"
            src="https://img.shields.io/youtube/channel/subscribers/UCV7Ibg1k_aMSEcDFgJvuvdg?style=social"
          />
        </a>
        <a target="_blank" href="https://feeds.osf2f.net/osf2f.xml">
          <img
            alt="RSS address"
            src="https://img.shields.io/badge/rss-F88900?style=flat&logo=rss&logoColor=white"
          />
        </a>
        <a
          target="_blank"
          href="https://open.spotify.com/show/48Yeu1L5pTluk1AVc3ShU6"
        >
          <img
            alt="Listen on Spotify"
            src="https://img.shields.io/badge/spotify-1DB954?style=flat&logo=spotify&logoColor=white"
          />
        </a>
        <a target="_blank" href="https://music.163.com/#/djradio?id=1001312291">
          <img h-20px alt="NetEase Music" src="/static/netease-music.svg" />
        </a>
      </div>
    </div>
    <div
      absolute
      right-5
      top-5
      cursor-pointer
      i="dark:carbon-moon carbon-sun"
      text="black 2xl"
      @click="toggleDark()"
    />
  </header>
</template>
