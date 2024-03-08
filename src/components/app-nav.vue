<script setup lang="ts">
const isFullScreen = ref(true)

const toggleFullScreen = () => {}
</script>

<template>
  <header>
    <AppNavbar :full-screen="isFullScreen" @toggle="toggleFullScreen" />
    <!-- <AppNavFull/> -->
    <VpNavbar />
  </header>
</template>
