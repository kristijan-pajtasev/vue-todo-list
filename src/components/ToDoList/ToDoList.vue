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
  <TransitionGroup name="list" tag="ul" class="item-list">
    <li v-for="todo in filteredToDoList" :key="todo.id">
      <div>{{ todo.title }}</div>
      <div>{{ todo.content }}</div>
    </li>
  </TransitionGroup>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
