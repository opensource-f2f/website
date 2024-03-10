<script setup lang="ts">
import { isLargeScreen } from '../utils/store-data'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div relative px-20px>
    <div flex>
      <!-- logo -->
      <div h-60px flex items-center>
        <router-link to="/">
          <div cursor-pointer text="black 2xl">
            <div i-carbon-home text="[var(--text-color)]" />
          </div>
        </router-link>
      </div>

      <div class="content" flex flex-grow-1 items-center flex-justify-end>
        <!-- menu -->
        <NavMenu v-if="isLargeScreen" class="menu" />

        <!-- search -->
        <!-- <NavSearch /> -->

        <!-- theme-toggler -->
        <div
          ml-40px
          cursor-pointer
          i="dark:carbon-moon carbon-sun"
          text="black 2xl"
          @click="toggleDark()"
        />

        <!-- github -->
        <a target="_blank" href="https://github.com/opensource-f2f">
          <div text="black 2xl" ml-15px cursor-pointer>
            <div i-carbon-logo-github text="[var(--text-color)]" />
          </div>
        </a>

        <!-- collapsible menu -->
        <NavHamburger v-if="!isLargeScreen" />
      </div>
    </div>
  </div>
</template>
