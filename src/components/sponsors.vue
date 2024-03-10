<script setup lang="ts">
import sponsors from '../assets/sponsors.json'
import { isLargeScreen } from '../utils/store-data'

sponsors.sort((a, b) => {
  return Date.parse(b.date) - Date.parse(a.date)
})
</script>

<template>
  <div self-center>
    <div>Sponsor list</div>

    <table :style="{ width: isLargeScreen ? '600px' : '350px' }">
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
