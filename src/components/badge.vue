<script setup lang="ts"></script>

<template>
  <span
    class="badge"
    flex="~ row gap-1"
    items-center
    justify-center
    px="1.5"
    py="0.5"
    text-xs
    font-400
    border-rounded
  >
    <slot name="icon" />
    <slot />
  </span>
</template>

<style scoped>
.badge {
  background-color: var(--brand-color);
  color: var(--text-color);
}
</style>
