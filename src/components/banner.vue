<script setup lang="ts">
import { Menu } from 'floating-vue'
import 'floating-vue/dist/style.css'
</script>

<template>
  <div flex="~ row gap-2 wrap" justify-center p2>
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

    <Menu>
      <div text="#2aae67" i-carbon-logo-wechat cursor-pointer text-20px />
      <template #popper>
        <div flex="~ col" m-10px>
          <img
            h-150px
            alt="Weixin Offcial Accounts Platform"
            src="/static/we-chat.jpeg"
          />扫一扫 关注微信公众号
        </div>
      </template>
    </Menu>
  </div>
</template>
