<script setup lang="ts">
import { menus } from '../../utils/menu'
</script>

<template>
  <nav flex>
    <router-link
      v-for="(item, key) in menus"
      :key="key"
      :to="item.href"
      class="text-[var(--text-color)]"
      sm="flex flex-gap1"
      ml-20px
      hidden
      items-center
    >
      <!-- TODO tooltip for label -->
      <div :title="item.label" :class="item.icon" class="text-2xl" />
    </router-link>
  </nav>
</template>
