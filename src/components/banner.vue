<script setup lang="ts">
import { Menu } from 'floating-vue'
import { banners } from '../utils/banner'
import 'floating-vue/dist/style.css'
</script>

<template>
  <div flex="~ row gap-2 wrap" justify-center p2>
    <a
      v-for="(item, key) in banners"
      :key="key"
      target="_blank"
      :href="item.href"
    >
      <img :alt="item.alt" :src="item.src" h-20px />
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
