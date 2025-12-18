<template>
  <MovieGrid :movies="movies" @select="openMovie" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MovieGrid from '@/components/MovieGrid.vue'

const router = useRouter()
const movies = ref([])

onMounted(async () => {
  const res = await fetch(
    'https://www.omdbapi.com/?s=star&apikey=6c29f279'
  )
  const data = await res.json()
  movies.value = data.Search.slice(0, 10)
})

function openMovie(id) {
  router.push(`/movie/${id}`)
}
</script>
