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
</script>
<template>
  <div class="bg-white w-full p-4 flex flex-col md:bg-[#f4f4f4]">
    <div class="flex flex-row gap-[1rem] md:w-[90rem] md:max-w-full md:m-auto">
      <div class="bg-white">
        <div class="">
          <h1>My Todos</h1>
          <div class="my-4">
            <input
              v-model="searchQuery"
              placeholder="Search..."
              class="bg-[#f4f4f4] px-4 py-1 rounded-md w-full overflow-hidden border border-[#ccc]"
            />
          </div>
        </div>

        <ToDoList
          :todos="filteredToDoList"
          @setSelectedToDo="setSelectedToDoId"
          class="overflow-y-auto h-full"
        />
      </div>
      <div class="hidden md:block bg-white flex-1">
        content
      </div>
    </div>
  </div>
</template>
