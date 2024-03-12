<script setup lang="ts">
import sponsors from '../assets/sponsors.json'

sponsors.sort((a, b) => {
  return Date.parse(b.date) - Date.parse(a.date)
})
</script>

<template>
  <div flex="~ col gap2" items-center p2>
    <h1>Sponsor list</h1>
    <table max-w-full w-600px>
      <tr>
        <td>捐赠人</td>
        <td>时间</td>
        <td>捐赠物</td>
        <td>渠道</td>
      </tr>
      <tr v-for="sponsor in sponsors" :key="sponsor.name">
        <td>{{ sponsor.name }}</td>
        <td>{{ sponsor.date }}</td>
        <td>{{ sponsor.item }}</td>
        <td>{{ sponsor.source }}</td>
      </tr>
    </table>
  </div>
</template>
