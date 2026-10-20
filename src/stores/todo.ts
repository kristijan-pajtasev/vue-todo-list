import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'

interface ToDo {
  id: number;
  title: string;
  content: string;
}

export const useToDoStore = defineStore('todo', () => {
  const todos:Ref<ToDo[]> = ref([
    { id: 1, title: 'Buy groceries', content: 'Milk, eggs, bread, and coffee' },
    { id: 2, title: 'Finish Vue project', content: 'Wire up the todo store and components' },
    { id: 3, title: 'Walk the dog', content: 'Evening walk around the park' },
    { id: 4, title: 'Read a book', content: 'Continue reading chapter 5' },
  ])
  const addTodo = (title: string, content: string) => {
    todos.value.push({
        id: Math.round(Math.random() * 1000000000),
        title, content
      })
    }

  return { todos, addTodo }
})
