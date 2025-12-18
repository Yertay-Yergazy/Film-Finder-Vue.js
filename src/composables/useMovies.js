import { ref, watchEffect } from 'vue'

export function useMovies(apiKey) {
  const movies = ref([])
  const loading = ref(false)
  const error = ref('')

  async function search(query) {
    if (!query) return

    loading.value = true
    error.value = ''

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
      )
      const data = await res.json()

      if (data.Response === 'True') {
        movies.value = data.Search.slice(0, 20)
      } else {
        error.value = data.Error
      }
    } catch {
      error.value = 'Ошибка загрузки'
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    if (movies.value.length) {
      console.log('Movies updated:', movies.value.length)
    }
  })

  return { movies, loading, error, search }
}
