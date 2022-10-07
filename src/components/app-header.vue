<script setup lang="ts">
const nowrap = 'float: left; white-space: nowrap; margin-left: 3px'
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
    <div flex="~ col gap-16px" justify-center items-center>
      <router-link :to="{ name: 'Index' }">
        <img w-100px h-100px src="../assets/logo.png" />
      </router-link>
      <span>开源面对面，连接热爱开源的你！</span>

      <span>
        <a
          target="_blank"
          href="https://github.com/opensource-f2f"
          :style="nowrap"
        >
          <img
            alt="GitHub Org's stars"
            src="https://img.shields.io/github/stars/opensource-f2f?style=social"
          />
        </a>
        <a target="_blank" href="https://twitter.com/osf2f" :style="nowrap">
          <img
            alt="Twitter followers"
            src="https://img.shields.io/twitter/follow/osf2f?style=social"
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCV7Ibg1k_aMSEcDFgJvuvdg"
          :style="nowrap"
        >
          <img
            alt="YouTube subscribers"
            src="https://img.shields.io/youtube/channel/subscribers/UCV7Ibg1k_aMSEcDFgJvuvdg?style=social"
          />
        </a>
        <a
          target="_blank"
          href="https://www.ximalaya.com/album/53320813.xml"
          :style="nowrap"
        >
          <img
            alt="RSS address"
            src="https://img.shields.io/badge/rss-F88900?style=flat&logo=rss&logoColor=white"
          />
        </a>
      </span>
    </div>
    <div
      absolute
      cursor-pointer
      right-5
      top-5
      i="dark:carbon-moon carbon-sun"
      text="black 2xl"
      @click="toggleDark()"
    />
  </header>
</template>
