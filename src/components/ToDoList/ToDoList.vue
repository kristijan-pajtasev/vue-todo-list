<script setup lang="ts">
import { useToDoStore } from '@/stores/todo.ts'
import { ref } from 'vue'

const toDoStore = useToDoStore()
console.log(toDoStore)
console.log(toDoStore.todos)
const toDoList = ref(toDoStore.todos)
</script>

<template>
  <div>ToDo List</div>
  <ul>
    <li v-for="todo in toDoList" :key="todo.id">
      <div>{{todo.title}}</div>
      <div>{{todo.content}}</div>
    </li>
  </ul>
</template>
