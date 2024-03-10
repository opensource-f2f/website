<script setup lang="ts">
import { menuList } from '../../utils/store-data'
</script>

<template>
  <nav flex>
    <a
      v-for="(item, key) in menuList"
      :key="key"
      ml-20px
      style="color: var(--text-color)"
      :item="item"
      :href="item.href"
    >
      {{ item.name }}
    </a>
  </nav>
</template>
