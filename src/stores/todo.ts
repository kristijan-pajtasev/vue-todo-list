import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'

interface ToDo {
  title: string;
  content: string;
}

export const useCounterStore = defineStore('todo', () => {
  const todo:Ref<ToDo[]> = ref([])

  return { todo }
})
