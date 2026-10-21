<script setup lang="ts">
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import { computed, ref } from 'vue'
import { useToDoStore } from '@/stores/toDoType.ts'
import AddToDoButtonAndModal from '@/components/AddToDoButtonAndModal/AddToDoButtonAndModal.vue'
import NoToDoForFilterWarning from '@/components/NoToDoForFilterWarning/NoToDoForFilterWarning.vue'
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
  <div class="bg-white md:p-4 rounded-lg overflow-hidden h-full flex flex-col gap-[0.5rem]">
    <div class="flex-1 overflow-hidden flex flex-col">
      <div class="shrink-0">
        <h1 class="font-bold text-[1.5rem]">My Todos</h1>
        <div class="my-4">
          <input
            v-model="searchQuery"
            placeholder="Search..."
            class="bg-[#f4f4f4] px-4 py-1 rounded-md w-full overflow-hidden border border-[#ccc]"
          />
        </div>
      </div>
      <div
        class="flex-1 overflow-hidden"
        v-if="filteredToDoList.length > 0 || (filteredToDoList.length === 0 && !searchQuery.length)"
      >
        <ToDoList :todos="filteredToDoList" @setSelectedToDo="setSelectedToDoId" class="h-full" />
      </div>
      <div
        v-else
        class="flex-1 overflow-hidden flex flex-col gap-[1rem] items-center justify-center"
      >
        <NoToDoForFilterWarning />
      </div>
    </div>
    <AddToDoButtonAndModal />
  </div>
</template>
