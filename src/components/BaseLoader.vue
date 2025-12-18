<template>
  <div v-show="show">Загрузка...</div>
</template>

<script setup>
defineProps({
  show: Boolean,
})
</script>
