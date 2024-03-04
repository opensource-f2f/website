<script setup lang="ts">
import { getPersonKey } from '../utils/episode'
// eslint-disable-next-line no-duplicate-imports, @typescript-eslint/consistent-type-imports
import type { Person } from '../utils/episode'

const { persons } = defineProps<{
  persons: Person[]
}>()
</script>

<template>
  <badge v-for="person of persons" :key="getPersonKey(person)">
    <template #icon><slot name="icon" /></template>
    <person :person="person" />
  </badge>
</template>
