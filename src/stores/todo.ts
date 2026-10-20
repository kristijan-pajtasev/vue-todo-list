import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'

interface ToDo {
  title: string;
  content: string;
}

export const useToDoStore = defineStore('todo', () => {
  const todos:Ref<ToDo[]> = ref([
    { title: 'Buy groceries', content: 'Milk, eggs, bread, and coffee' },
    { title: 'Finish Vue project', content: 'Wire up the todo store and components' },
    { title: 'Walk the dog', content: 'Evening walk around the park' },
    { title: 'Read a book', content: 'Continue reading chapter 5' },
  ])

  return { todos }
})
