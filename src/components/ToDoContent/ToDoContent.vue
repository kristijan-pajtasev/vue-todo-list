<script setup lang="ts">
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import { useToDoStore } from '@/stores/toDoType.ts'
import { computed, ref } from 'vue'
const todoStore = useToDoStore()

const toDoList = ref(todoStore.todos)
const searchQuery = ref('')
const filteredToDoList = computed(() => {
  return toDoList.value.filter((todo) => {
    return (
      todo.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      todo.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
})
</script>
<template>
  <div class="bg-white w-full p-4">
    <h1>My Todos</h1>
    <div>
      <input v-model="searchQuery" />
    </div>

    <ToDoList :todos="filteredToDoList" />
  </div>
</template>
