<script setup lang="ts">
import { getAllEpisode } from '../utils/episode'

const rawEpisodes = Object.values(getAllEpisode())

const sort = ref<'asc' | 'desc'>('desc')
const selectedYear = ref<number | null>(null)

const availableYears = computed(() => {
  const years = new Set(rawEpisodes.map(e => e.date.getFullYear()))
  return Array.from(years).sort((a, b) => b - a)
})

const handleSort = () => {
  sort.value = sort.value === 'asc' ? 'desc' : 'asc'
}

const handleYearFilter = (year: number | null) => {
  selectedYear.value = year
}

const episodes = computed(() =>
  [...rawEpisodes]
    .filter(e => selectedYear.value === null || e.date.getFullYear() === selectedYear.value)
    .sort((a, b) => {
      if (sort.value === 'asc') {
        return a.date.getTime() - b.date.getTime()
      } else {
        return b.date.getTime() - a.date.getTime()
      }
    }),
)
</script>

<template>
  <div flex="~ col 1" px-4>
    <div flex="~ wrap row gap-2" items-center justify-between px-6 py-4>
      <div flex="~ wrap gap-2" items-center>
        <span text-sm font-medium text-gray-500>年份:</span>
        <button
          :class="[
            'year-chip',
            selectedYear === null ? 'year-chip-active' : 'year-chip-inactive'
          ]"
          @click="handleYearFilter(null)"
        >
          全部
        </button>
        <button
          v-for="year in availableYears"
          :key="year"
          :class="[
            'year-chip',
            selectedYear === year ? 'year-chip-active' : 'year-chip-inactive'
          ]"
          @click="handleYearFilter(year)"
        >
          {{ year }}
        </button>
      </div>
      <div
        :class="
          sort === 'asc'
            ? 'i-carbon-sort-descending'
            : 'i-carbon-sort-ascending'
        "
        cursor-pointer
        text-2xl
        text-gray-500
        hover:text-gray-700
        dark:text-gray-400
        dark:hover:text-gray-200
        @click="handleSort"
      />
    </div>
    <div class="episodes" grid justify-center gap-2>
      <episode-item
        v-for="episode of episodes"
        :key="episode.id"
        :info="episode"
      />
    </div>
  </div>
</template>

<style scoped>
.episodes {
  grid-template-columns: repeat(auto-fill, minmax(min(420px, 100%), 1fr));
}

.year-chip {
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.year-chip-active {
  background-color: #3b82f6;
  color: white;
}

.year-chip-active:hover {
  background-color: #2563eb;
}

.year-chip-inactive {
  background-color: white;
  color: #6b7280;
  border-color: #d1d5db;
}

.year-chip-inactive:hover {
  background-color: #f3f4f6;
  border-color: #9ca3af;
}

.dark .year-chip-inactive {
  background-color: #1f2937;
  color: #9ca3af;
  border-color: #374151;
}

.dark .year-chip-inactive:hover {
  background-color: #374151;
  border-color: #4b5563;
}
</style>
