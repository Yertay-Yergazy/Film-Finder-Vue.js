<template>
  <div class="page-container">
    <div class="center-content login-center">
      <h2>Вход в систему</h2>

      <form @submit.prevent="handleLogin" class="login-form">
        <input type="email" v-model="email" placeholder="Email" required />
        <input
          type="password"
          v-model="password"
          placeholder="Пароль"
          required
        />

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit">Войти</button>
        <button type="button" @click="handleRegister">
          Зарегистрироваться
        </button>
      </form>

      <div v-if="user" class="user-info">
        <p>Вы вошли как {{ user.email }}</p>
        <button @click="logout">Выйти</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = useRouter();
const { user, login, register, logout } = useAuth();

const email = ref("");
const password = ref("");
const error = ref("");

async function handleLogin() {
  error.value = "";
  try {
    await login(email.value, password.value);
    router.push("/"); // редирект на главную
  } catch (e) {
    error.value = e.message;
  }
}

async function handleRegister() {
  error.value = "";
  try {
    await register(email.value, password.value);
    router.push("/");
  } catch (e) {
    error.value = e.message;
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1c1c1c, #121212);
  color: #fff;
}

.center-content.login-center {
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  width: 100%;
  max-width: 400px;
  background-color: #2b2b2b;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.center-content.login-center h2 {
  margin-bottom: 1rem;
  color: #fff;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.login-form input {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
}

.login-form button {
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: #ff6b6b;
  color: #fff;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #ff4b4b;
}

.error {
  color: #ff6b6b;
  font-size: 0.9rem;
}

.user-info {
  margin-top: 1rem;
  text-align: center;
}

.user-info button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #555;
  color: #fff;
}

.user-info button:hover {
  background-color: #777;
}
</style>
