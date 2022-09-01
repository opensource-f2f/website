<script setup lang="ts">
import type { Person } from '../utils/episode'

const { person } = defineProps<{
  person: Person
}>()
</script>

<template>
  <span v-if="typeof person === 'string'">{{ person }}</span>
  <a v-else :href="person.link" target="_blank">{{ person.name }}</a>
</template>
