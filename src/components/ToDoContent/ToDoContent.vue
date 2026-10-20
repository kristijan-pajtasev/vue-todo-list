<script setup lang="ts">
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import { useToDoStore } from '@/stores/toDoType.ts'
const todoStore = useToDoStore()

</script>
<template>
  <div class="bg-white w-full p-4">
    <h1>My Todos</h1>
    <ToDoList :todos="todoStore.todos" />
  </div>
</template>
