<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header
    flex="~ row"
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
