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
      <div
        class="max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:w-full max-md:h-full bg-white p-4 md:w-[40rem] md:max-w-full md:rounded-lg md:overflow-hidden"
        @click.stop
      >
        <div class="flex flex-col justify-between h-full">
          <div>
            <div class="text-[1.5rem] font-bold mb-[1rem]">New Todo</div>
            <div class="mb-[1rem]">
              <label class="font-bold mb-[0.5rem] block" for="title">Title:</label>
              <input
                class="p-2 bg-[#f4f4f4] border border-[#707070] rounded-lg overflow-hidden w-full"
                id="title"
                v-model="title"
              />
            </div>
            <div>
              <label class="font-bold mb-[0.5rem] block" for="content">Content:</label>
              <textarea
                class="p-2 bg-[#f4f4f4] border border-[#707070] rounded-lg overflow-hidden w-full resize-none h-[5rem]"
                id="content"
                v-model="content"
              />
            </div>
            <div></div>
          </div>
          <div class="border-t border-[#f4f4f4] flex flex-col gap-[0.5rem] md:mt-[1rem]">
            <button
              class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"
              @click="saveForm"
            >
              Save
            </button>
            <button
              class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center border border-[#707070] rounded-full"
              @click="cancelForm"
            >
              Cancel
            </button>
          </div>
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
