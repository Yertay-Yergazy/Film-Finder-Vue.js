<template>
  <div class="page-container">
    <!-- Центрированный блок поиска -->
    <div class="center-content">
      <h2>Информацию о каком фильме ты хочешь найти?</h2>
      <SearchBar v-model="query" @search="searchMovies" />
    </div>

    <button class="sidebar-toggle" @click="toggleSidebar">
      <span :class="{ arrow: !isSidebarOpen, close: isSidebarOpen }"></span>
    </button>

    <!-- Боковая панель -->
    <div class="sidebar" :class="{ open: isSidebarOpen }">
      <h3>История поиска</h3>
      <ul>
        <li
          v-for="(item, index) in searchHistory"
          :key="index"
          @click="selectFromHistory(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Результаты -->
    <BaseLoader :show="loading" />
    <BaseError :error="error" />
    <MovieGrid :movies="movies" @select="openMovie" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useMovies } from "@/composables/useMovies";

import SearchBar from "@/components/SearchBar.vue";
import MovieGrid from "@/components/MovieGrid.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import BaseError from "@/components/BaseError.vue";

const router = useRouter();
const query = ref("");
const stats = reactive({ searches: 0 });
const isSidebarOpen = ref(false);
const searchHistory = ref([]);

const { movies, loading, error, search } = useMovies("6c29f279");

function searchMovies() {
  if (query.value.trim() === "") return;

  stats.searches++;
  search(query.value);

  // Добавляем запрос в историю
  if (!searchHistory.value.includes(query.value)) {
    searchHistory.value.unshift(query.value); // новые сверху
  }
}

function openMovie(id) {
  router.push(`/movie/${id}`);
}

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function selectFromHistory(item) {
  query.value = item;
  searchMovies();
  isSidebarOpen.value = false;
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
}

.center-content {
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 2rem;
}

.center-content h2 {
  color: #fff;
}

.sidebar-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: none;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.sidebar-toggle span {
  display: block;
  width: 15px;
  height: 2px;
  background-color: #fff;
  position: relative;
  transition: all 0.3s ease;
}

.sidebar-toggle span.arrow::before,
.sidebar-toggle span.arrow::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.sidebar-toggle span.arrow::before {
  transform: rotate(45deg);
  top: -5px;
}
.sidebar-toggle span.arrow::after {
  transform: rotate(-45deg);
  top: 5px;
}

.sidebar-toggle span.close {
  background-color: transparent;
}

.sidebar-toggle span.close::before,
.sidebar-toggle span.close::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 2px;
  background-color: #fff;
  top: 0;
  left: 0;
}

.sidebar-toggle span.close::before {
  transform: rotate(45deg);
}
.sidebar-toggle span.close::after {
  transform: rotate(-45deg);
}

.sidebar {
  position: fixed;
  top: 0;
  right: -300px; /* скрыта по умолчанию */
  width: 300px;
  height: 100%;
  background-color: #2b2b2b;
  color: #fff;
  padding: 2rem 1rem;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 999;
}

.sidebar.open {
  right: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 0.5rem 0;
  cursor: pointer;
}

.sidebar li:hover {
  text-decoration: underline;
}
</style>
