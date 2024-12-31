<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div px-20px>
    <div flex>
      <!-- logo -->
      <div h-60px flex items-center>
        <router-link to="/">
          <div i-carbon-home cursor-pointer text-2xl text-black />
        </router-link>
      </div>

      <div class="content" flex="~ grow-1 justify-end gap5" items-center>
        <NavMenu />

        <!-- search -->
        <!-- <NavSearch /> -->

        <!-- theme-toggler -->
        <div
          cursor-pointer
          i="dark:carbon-moon carbon-sun"
          text="black! 2xl"
          @click="toggleDark()"
        />

        <!-- github -->
        <a target="_blank" href="https://github.com/opensource-f2f">
          <div i-carbon-logo-github cursor-pointer text-2xl text-black />
        </a>

        <!-- collapsible menu -->
        <NavHamburger />
      </div>
    </div>
  </div>
</template>
