<template>
  <div v-if="movie" class="movie-detail">
    <div class="movie-header">
      <img :src="movie.Poster" alt="Poster" />
      <div class="movie-info">
        <router-link class="home-button" to="/">На главную</router-link>

        <h1>{{ movie.Title }}</h1>
        <p><strong>Год:</strong> {{ movie.Year }}</p>
        <p><strong>Жанр:</strong> {{ movie.Genre }}</p>
        <p><strong>Рейтинг IMDB:</strong> {{ movie.imdbRating }}</p>
        <p><strong>Длительность:</strong> {{ movie.Runtime }}</p>
      </div>
    </div>

    <div class="movie-plot">
      <h2>Сюжет</h2>
      <p>{{ movie.Plot }}</p>
    </div>

    <!-- Форма комментариев -->
    <div class="comment-form">
      <h2>Оставить комментарий</h2>
      <form @submit.prevent="submit">
        <input v-model="name" placeholder="Имя" />
        <input v-model="email" placeholder="Email" />
        <textarea v-model="text" placeholder="Комментарий"></textarea>

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit">Отправить</button>
      </form>

      <!-- Список комментариев -->
      <div v-if="comments.length" class="comments-list">
        <h3>Комментарии:</h3>
        <div v-for="(c, index) in comments" :key="index" class="comment-item">
          <p>
            <strong>{{ c.name }}</strong> (<em>{{ c.email }}</em
            >)
          </p>
          <p>{{ c.text }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loading">Загрузка...</div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const movie = ref(null);

onMounted(async () => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${route.params.id}&apikey=6c29f279`
  );
  movie.value = await res.json();
});

// Форма комментариев
const name = ref("");
const email = ref("");
const text = ref("");
const error = ref("");
const comments = ref([]);

// Ключ для localStorage
const storageKey = `comments-${route.params.id}`;

// Загружаем комментарии из localStorage
onMounted(() => {
  const saved = localStorage.getItem(storageKey);
  if (saved) comments.value = JSON.parse(saved);
});

// Сохраняем комментарии в localStorage при изменении
watch(
  comments,
  (newComments) => {
    localStorage.setItem(storageKey, JSON.stringify(newComments));
  },
  { deep: true }
);

function submit() {
  if (!name.value || !email.value || text.value.length < 5) {
    error.value = "Заполните все поля корректно";
    return;
  }

  error.value = "";
  comments.value.push({
    name: name.value,
    email: email.value,
    text: text.value,
  });

  name.value = "";
  email.value = "";
  text.value = "";
}
</script>

<style scoped>
.movie-detail {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 0.5s forwards;
}

.movie-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .movie-header {
    flex-direction: row;
  }
}

.movie-header img {
  width: 100%;
  max-width: 250px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.movie-header img:hover {
  transform: scale(1.05);
}

.movie-info {
  flex: 1;
}

.movie-info h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.movie-info p {
  margin: 0.3rem 0;
  font-size: 1rem;
  color: #ccc;
}

.movie-plot {
  margin-top: 2rem;
}

.movie-plot h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #444;
  padding-bottom: 0.3rem;
}

.movie-plot p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
}

.comment-form {
  margin-top: 2rem;
  background-color: #2b2b2b;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.comment-form h2 {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
}

.comment-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment-form input,
.comment-form textarea {
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
}

.comment-form textarea {
  resize: vertical;
  min-height: 80px;
}

.comment-form button {
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  background-color: #ff4c4c;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.comment-form button:hover {
  background-color: #ff1f1f;
}

.comment-form .error {
  color: #ff6b6b;
  font-weight: 500;
  text-align: center;
}

.comments-list {
  margin-top: 1.5rem;
}

.comment-item {
  background-color: #1e1e1e;
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  border-left: 3px solid #ff4c4c;
}

.comment-item p {
  margin: 0.2rem 0;
  color: #ccc;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  margin-top: 3rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.home-button {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff4c4c;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.home-button:hover {
  background-color: #ff1f1f;
}
</style>
