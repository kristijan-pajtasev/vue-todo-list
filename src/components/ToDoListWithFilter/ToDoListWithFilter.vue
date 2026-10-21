<script setup lang="ts">
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import { computed, ref } from 'vue'
import { useToDoStore } from '@/stores/toDoType.ts'
import AddToDoButtonAndModal from '@/components/AddToDoButtonAndModal/AddToDoButtonAndModal.vue'
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
  <div
    class="bg-white md:p-4 rounded-lg overflow-hidden h-full flex flex-col justify-between gap-[0.5rem] overflow-hidden"
  >
    <div class="flex-1 h-full overflow-hidden">
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
      <div class="flex-1 overflow-hidden max-md:h-full">
        <ToDoList
          :todos="filteredToDoList"
          @setSelectedToDo="setSelectedToDoId"
          class="overflow-y-auto h-full"
        />
      </div>
    </div>
    <AddToDoButtonAndModal />
  </div>
</template>
