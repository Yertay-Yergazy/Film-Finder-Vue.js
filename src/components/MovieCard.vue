<template>
  <div class="movie-card" @click="selectMovie">
    <img :src="movie.Poster" />
    <h3>{{ movie.Title }}</h3>
    <p>{{ movie.Year }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: Object,
});

const emit = defineEmits(["select"]);

function selectMovie() {
  emit("select", props.movie.imdbID);
}
</script>
<style scoped>
/* MovieCard.vue */
.movie-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e;
  color: #fff;
}

.movie-card img {
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  transition: transform 0.3s ease;
}

.movie-card:hover img {
  transform: scale(1.1);
}

.movie-card h3 {
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
  text-align: center;
}

.movie-card p {
  margin: 0.2rem 0 0.5rem;
  font-size: 0.9rem;
  color: #ccc;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
}
</style>
