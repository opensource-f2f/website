<script setup lang="ts"></script>

<template>
  <header class="header" flex="~ row" h-240px w-full justify-center>
    <div flex="~ col gap-16px" justify-center items-center>
      <router-link :to="{ name: 'Index' }">
        <img w-100px h-100px src="../assets/logo.png" />
      </router-link>
      <span>开源面对面，连接热爱开源的你！</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--header-bg);
}
</style>
