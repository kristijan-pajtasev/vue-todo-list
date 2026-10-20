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

const selectedToDoId = ref<number>()
console.log(selectedToDoId)
const setSelectedToDoId = (id: number) => {
  selectedToDoId.value = id
}
const selectedToDo = computed(() => {
  return toDoList.value.find((todo) => todo.id === selectedToDoId.value)
})
</script>
<template>
  <div class="bg-white w-full p-4">
    <div v-if="selectedToDoId && selectedToDo">
      selected id: {{ selectedToDoId }}
      <div>{{ selectedToDo }}</div>
    </div>
    <div v-else>
      <h1>My Todos</h1>
      <div class="my-4">
        <input
          v-model="searchQuery"
          placeholder="Search..."
          class="bg-[#E3E3E3] px-4 py-1 rounded-md w-full overflow-hidden border border-[#ccc]"
        />
      </div>

      <ToDoList :todos="filteredToDoList" @setSelectedToDo="setSelectedToDoId" />
    </div>
  </div>
</template>
