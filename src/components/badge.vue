<script setup lang="ts"></script>

<template>
  <span
    flex="~ row gap-1"
    items-center
    justify-center
    px="1.5"
    py="0.5"
    text-xs
    font-400
    border-rounded
    bg="[var(--brand-color)]"
    dark:bg="#3E6B27"
    text="[var(--text-color)]"
  >
    <slot name="icon" />
    <slot />
  </span>
</template>
