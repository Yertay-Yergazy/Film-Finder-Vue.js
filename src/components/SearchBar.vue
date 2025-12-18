<template>
  <input
    :value="modelValue"
    @input="onInput"
    @keyup.enter="emit('search')"
    placeholder="Поиск..."
  />
</template>

<script setup>
defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue", "search"]);

// функция для эмита обновленного значения
function onInput(event) {
  emit("update:modelValue", event.target.value);
}
</script>
