<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <!-- logo -->
      <div class="logo-container">
        <router-link to="/">
          <div cursor-pointer text="black 2xl">
            <div i-carbon-home text="[var(--text-color)]" />
          </div>
        </router-link>
      </div>

      <div class="content">
        <!-- menu -->
        <NavMenu class="menu" />

        <!-- theme-toggler -->
        <div
          ml-55px
          cursor-pointer
          i="dark:carbon-moon carbon-sun"
          text="black 2xl"
          @click="toggleDark()"
        />

        <!-- github -->
        <a target="_blank" href="https://github.com/opensource-f2f">
          <div cursor-pointer text="black 2xl" ml-15px>
            <div i-carbon-logo-github text="[var(--text-color)]" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-wrapper {
  position: relative;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  height: 60px;
  padding: 0 24px;
}
.header-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.logo-container {
  display: flex;
  align-items: center;
  height: 60px;
}
.content {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  flex-grow: 1;
}
</style>
