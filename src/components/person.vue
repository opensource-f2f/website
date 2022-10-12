<script setup lang="ts">
import type { Person } from '../utils/episode'

const { person } = defineProps<{
  person: Person
}>()
</script>

<template>
  <a v-if="typeof person === 'string'" :href="`/contributor/${person}`">
    {{ person }}
  </a>
  <a v-else :href="person.link" target="_blank">{{ person.name }}</a>
</template>
