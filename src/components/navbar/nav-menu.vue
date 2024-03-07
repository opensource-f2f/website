<script setup lang="ts">
const list = ref([
  { name: '首页', value: '/' },
  { name: '活动', value: '/' },
  { name: '关于我们', value: '/' },
])
</script>

<template>
  <nav flex>
    <div v-for="(item, key) in list" :key="key" :item="item" ml-20px>
      {{ item.name }}
    </div>
  </nav>
</template>
