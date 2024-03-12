<script setup lang="ts">
import { isShowMenu, menus } from '../../utils/menu'

const router = useRouter()
router.afterEach(() => {
  isShowMenu.value = false
})
</script>

<template>
  <div
    cursor-pointer
    text-2xl
    sm-hidden
    :class="isShowMenu ? 'i-carbon-close' : 'i-carbon-menu'"
    @click="isShowMenu = !isShowMenu"
  />
  <Transition>
    <div
      v-show="isShowMenu"
      flex="~ col gap2"
      bg="[var(--bg)]"
      fixed
      left-0
      top-60px
      z-999
      h-full
      w-full
      px-50px
      py-10px
      duration="150!"
    >
      <router-link
        v-for="(item, key) in menus"
        :key="key"
        border-b="1px solid [var(--border-color)]"
        class="text-[var(--text-color)]"
        flex="~ gap2"
        items-center
        justify-center
        p2
        :to="item.href"
      >
        <div :class="item.icon" text-xl />
        {{ item.label }}
      </router-link>
    </div>
  </Transition>
</template>
