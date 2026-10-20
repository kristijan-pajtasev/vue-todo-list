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
      <div><button @click="selectedToDoId = undefined">All todos</button></div>
      <h1 class="text-lg font-bold">{{selectedToDo.title}}</h1>
      <div class="text-sm text-[#999]">{{selectedToDo.isCompleted ? "Completed" : "Not Completed"}}</div>
      <hr class="my-4 border-[#ccc]" />
      <div>{{selectedToDo.content}}
      </div>
    </div>
    <div v-else class="h-full">
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
