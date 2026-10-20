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
  <div class="h-full flex flex-row justify-center items-center px-4 py-2 border-t border-[#DDDDDD]">
    <div
      class="w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"
      @click="openAddModal"
    >
      <div class="font-bold text-center">Add item</div>
    </div>
  </div>
  <Teleport v-if="showModal" to="body">
    <div class="modalContainer" @click="showModal = false">
      <div class="modalAddTodoCard" @click.stop>
        <div>
          <label>Title:</label>
          <input v-model="title" />
        </div>
        <div>
          <label>Content:</label>
          <textarea v-model="content" />
        </div>
        <div>
          <button @click="cancelForm">Cancel</button>
          <button @click="saveForm">Save</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modalContainer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #000000cc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.modalAddTodoCard {
  background: white;
  border-radius: 10px;
  padding: 16px;
  width: 30rem;
  max-width: 100%;
}
</style>
