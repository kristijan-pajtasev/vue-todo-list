<script setup lang="ts">
import { useToDoStore } from '@/stores/todo.ts'
import { computed, ref } from 'vue'

const toDoStore = useToDoStore()
console.log(toDoStore)
console.log(toDoStore.todos)
const toDoList = ref(toDoStore.todos)
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
  <div>ToDo List</div>
  <div>
    <input v-model="searchQuery" />
  </div>
  <ul>
    <li v-for="todo in filteredToDoList" :key="todo.id">
      <div>{{ todo.title }}</div>
      <div>{{ todo.content }}</div>
    </li>
  </ul>
</template>
