<template>
  <span
    flex="~ row gap-1"
    px="1.5"
    py="0.5"
    bg="[var(--brand-color)]"
    dark:bg="#3E6B27"
    text="[var(--text-color)]"
    items-center
    justify-center
    border-rounded
    text-xs
    font-400
    transition
    style="transition-property: background-color"
  >
    <slot name="icon" />
    <slot />
  </span>
</template>
