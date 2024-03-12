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
          <div cursor-pointer text="black 2xl">
            <div i-carbon-home text="[var(--text-color)]" />
          </div>
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
          text="black 2xl"
          @click="toggleDark()"
        />

        <!-- github -->
        <a target="_blank" href="https://github.com/opensource-f2f">
          <div text="black 2xl" cursor-pointer>
            <div i-carbon-logo-github text="[var(--text-color)]" />
          </div>
        </a>

        <!-- collapsible menu -->
        <NavHamburger />
      </div>
    </div>
  </div>
</template>
