<script setup lang="ts">
import { useToDoStore } from '@/stores/todo.ts'

const toDoStore = useToDoStore()
console.log(toDoStore)
console.log(toDoStore.todos)
</script>

<template>ToDo list</template>
