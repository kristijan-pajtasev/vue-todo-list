<script setup lang="ts">
import { ref } from 'vue'
import { useToDoStore } from '@/stores/toDoType.ts'

const showModal = ref(false)
const todoStore = useToDoStore()
const openAddModal = () => {
  showModal.value = true
}
const title = ref('')
const content = ref('')

const cancelForm = () => {
  title.value = ''
  content.value = ''
  showModal.value = false
}

const saveForm = () => {
  ;(todoStore.addTodo(title.value, content.value), (title.value = ''))
  content.value = ''
  showModal.value = false
}
</script>
<template>
  <div class="px-4 py-2 bg-[#EBEBEB]">
    <div class="flex flex-row items-center gap-2">
      <span class="w-[0.7rem] h-[0.7rem] rounded-full overflow-hidden bg-[#1976D2]" />
      <span class="font-bold">Todos</span>
    </div>
    <!--    <button @click="openAddModal">Add Todo</button>-->
  </div>
</template>
