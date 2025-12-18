<template>
  <div class="not-found">
    <img src="https://media.tenor.com/GrP5jf9F6_wAAAAe/gojo.png" alt="404" />
    <h1>404</h1>
    <p>Страница не найдена</p>
    <router-link to="/">На главную</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background: #1e1e1e;
  color: #fff;
  gap: 1.5rem;
  padding: 2rem;
}

.not-found img {
  width: 300px;
  max-width: 80%;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  animation: float 2s ease-in-out infinite alternate;
}

.not-found h1 {
  font-size: 4rem;
  margin: 0;
}

.not-found p {
  font-size: 1.5rem;
  margin: 0;
  color: #ccc;
}

.not-found a {
  margin-top: 1rem;
  text-decoration: none;
  color: #fff;
  background-color: #ff4c4c;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.not-found a:hover {
  background-color: #ff1f1f;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-15px);
  }
}
</style>
