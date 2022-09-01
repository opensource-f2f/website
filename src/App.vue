<script setup lang="ts"></script>

<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<style>
#app {
  height: 100%;
  background-color: var(--body-bg);
  color: var(--text-color);
}
</style>
