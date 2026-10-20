import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('todo', () => {
  const todo = ref([])

  return { todo }
})
