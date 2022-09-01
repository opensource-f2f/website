<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { Person } from '../utils/episode'

const { persons } = defineProps<{
  persons: Person[]
}>()
</script>

<template>
  <div
    v-for="(person, index) of persons"
    :key="typeof person === 'string' ? person : person.name"
  >
    <person :person="person" />
    <span v-if="index !== persons.length - 1">,</span>
  </div>
</template>
