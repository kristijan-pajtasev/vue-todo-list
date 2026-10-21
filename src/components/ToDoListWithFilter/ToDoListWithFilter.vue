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
        <div class="flex flex-col gap-[1rem] items-center justify-center h-full">
          <div>
            <div class="bg-[#FFF0E8] p-2 rounded-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="169.5 327 36 36"
              >
                <defs />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g id="svg1" mask="url(#mask-for-svg11)">
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <mask id="mask-for-svg11">
                    <rect width="36" height="36" x="169.5" y="327" fill="#ffffff" />
                  </mask>
                  <g transform="matrix(1.5 0 0 1.5 169.5 327)">
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      color="rgb(55, 54, 77)"
                      fill="none"
                      stroke="rgb(55, 54, 77)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2px"
                    />
                    <path
                      d="m20 20-3.5-3.5M8.5 8.5l5 5M13.5 8.5l-5 5"
                      color="rgb(55, 54, 77)"
                      fill="none"
                      stroke="rgb(55, 54, 77)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2px"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="max-w-[20rem] text-center">
            <div class="text-[1.2rem] font-bold">Do todos that match your query</div>
            <div>
              Check the spelling or try a different word. Search looks in titles and content.
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddToDoButtonAndModal />
  </div>
</template>
