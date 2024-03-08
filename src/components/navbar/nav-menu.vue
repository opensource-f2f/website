<script setup lang="ts">
const list = ref([
  { name: '活动', value: '/' },
  { name: 'Our Sponsors', value: '/sponsors' },
  { name: '关于我们', value: '/' },
])
</script>

<template>
  <nav flex>
    <a
      ml-20px
      style="color: var(--text-color)"
      v-for="(item, key) in list"
      :key="key"
      :item="item"
      :href="item.value"
    >
      {{ item.name }}
    </a>
  </nav>
</template>
