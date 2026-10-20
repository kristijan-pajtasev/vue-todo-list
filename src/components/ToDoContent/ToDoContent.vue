<script setup lang="ts">
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import { type ToDoType, useToDoStore } from '@/stores/toDoType.ts'
import { computed, ref } from 'vue'
const todoStore = useToDoStore()

const searchQuery = ref('')
const filteredToDoList = computed(() => {
  return todoStore.todos.filter((todo) => {
    return (
      todo.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      todo.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
})

const selectedToDoId = ref<number>()

const setSelectedToDoId = (id: number) => {
  selectedToDoId.value = id
}

const selectedToDo = computed(() => {
  return todoStore.todos.find((todo) => todo.id === selectedToDoId.value)
})

</script>
<template>
  <div class="bg-white w-full p-4 flex flex-col">
    <!--    <div v-if="selectedToDoId && selectedToDo">-->

    <!--    </div>-->
    <!--    <div v-else class="h-full">-->
    <div>
      <h1>My Todos</h1>
      <div class="my-4">
        <input
          v-model="searchQuery"
          placeholder="Search..."
          class="bg-[#E3E3E3] px-4 py-1 rounded-md w-full overflow-hidden border border-[#ccc]"
        />
      </div>
    </div>

    <ToDoList :todos="filteredToDoList" @setSelectedToDo="setSelectedToDoId" class="overflow-y-auto h-full" />
    <!--    </div>-->
  </div>

</template>
