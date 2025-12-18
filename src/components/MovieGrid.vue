<template>
  <div class="grid">
    <MovieCard
      v-for="movie in movies"
      :key="movie.imdbID"
      :movie="movie"
      @select="emit('select', $event)"
    />
  </div>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";

defineProps({
  movies: Array,
});

const emit = defineEmits(["select"]);
</script>

<style scoped></style>
<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
  width: 100%;
  padding: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

/* Планшеты */
@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Маленькие десктопы */
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Стандартные ПК */
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
