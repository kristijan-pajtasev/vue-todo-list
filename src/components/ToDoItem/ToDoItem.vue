<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useToDoStore } from '@/stores/toDoType.ts'

// Inicijalizacija route objekta
const route = useRoute()
const router = useRouter()
const todoStore = useToDoStore()
const itemId = computed(() => parseInt(route.params.id as string))
const selectedItem = computed(() => {
  return todoStore.getItemById(itemId.value)
})
if (!selectedItem.value) {
  router.replace({ name: 'NotFound' })
}
</script>

<template>
  <!--  <div><button @click="selectedToDoId = undefined">All todos</button></div>-->
  <div v-if="selectedItem" class="p-4 h-full">
    <div class="flex flex-col h-full">
      <div>
        <h1 class="text-lg font-bold">{{ selectedItem.title }}</h1>
        <div class="text-sm text-[#999]">
          {{ selectedItem.isCompleted ? 'Completed' : 'Not Completed' }}
        </div>
        <hr class="my-4 border-[#ccc]" />
      </div>
      <div>{{ selectedItem.content }}</div>
      <div>
        <!--        <div><button @click="toggleCompleted(selectedToDo)">Mark as completed</button></div>-->
        <div>
          <!--          <div><button @click="editTodo()">Edit</button></div>-->
          <!--          <div><button @click="showConfirmDeleteForm = true">Delete</button></div>-->
        </div>
      </div>
    </div>
  </div>
</template>
