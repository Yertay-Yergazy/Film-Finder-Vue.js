<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="Имя" />
    <input v-model="email" placeholder="Email" />
    <textarea v-model="text" placeholder="Комментарий"></textarea>

    <p v-if="error" class="error">{{ error }}</p>

    <button>Отправить</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const text = ref('')
const error = ref('')

function submit() {
  if (!name.value || !email.value || text.value.length < 5) {
    error.value = 'Заполните все поля корректно'
    return
  }

  error.value = ''
  alert('Комментарий отправлен')
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
