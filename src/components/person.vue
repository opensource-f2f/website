<script setup lang="ts">
import type { Person } from '../utils/episode'

const { person } = defineProps<{
  person: Person
}>()
</script>

<template>
  <router-link v-if="typeof person === 'string'" :to="`/contributor/${person}`">
    {{ person }}
  </router-link>
  <a v-else :href="person.link" target="_blank">{{ person.name }}</a>
</template>
