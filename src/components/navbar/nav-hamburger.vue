<script setup lang="ts">
import { isShowMenu, menuList } from '../../utils/store-data'
</script>

<template>
  <div
    ml-20px
    cursor-pointer
    sm-hidden
    :i="isShowMenu ? 'carbon-close' : 'carbon-menu'"
    text=" 2xl"
    @click="isShowMenu = !isShowMenu"
  />
  <div
    v-show="isShowMenu"
    style="background-color: var(--bg)"
    flex="~ col"
    fixed
    left-0
    top-60px
    z-999
    h-full
    w-full
    px-50px
    py-10px
  >
    <div
      v-for="(item, key) in menuList"
      :key="key"
      style="border-bottom: 1px solid var(--border-color)"
      border-bottom="1px solid [var(--border-color)]"
      p-10px
      text-center
    >
      <a
        :key="key"
        ml-20px
        style="color: var(--text-color)"
        :item="item"
        :href="item.href"
      >
        {{ item.name }}
      </a>
    </div>
  </div>
</template>
