import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'

export interface ToDoType {
  id: number
  title: string
  content: string
  isCompleted: boolean
}

export const useToDoStore = defineStore('todo', () => {
  const todos: Ref<ToDoType[]> = ref([
    { id: 1, title: 'Buy groceries', content: 'Milk, eggs, bread, and coffee', isCompleted: false },
    { id: 2, title: 'Finish Vue project', content: 'Wire up the todo store and components', isCompleted: false },
    { id: 3, title: 'Walk the dog', content: 'Evening walk around the park', isCompleted: false },
    { id: 4, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
    { id: 5, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
    { id: 6, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
    { id: 7, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
    { id: 8, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
    { id: 9, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
    { id: 10, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
    { id: 11, title: 'Read a book', content: 'Continue reading chapter 5', isCompleted: false },
  ])

  const addTodo = (title: string, content: string) => {
    todos.value.push({
      id: Math.round(Math.random() * 1000000000),
      title,
      content,
      isCompleted: false,
    })
    console.log("add", todos.value)
  }

  const updateTodo = (id: number, title: string, content: string, isCompleted: boolean) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        title,
        content,
        isCompleted,
      }
    })
  }

  const toggleIsToDoCompleted = (id: number) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      }
    })
  }

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  const getItemById = (id: number) => {
    console.log(todos.value)
    return todos.value.find((item) => item.id === id)
  }

  return { todos, addTodo, deleteTodo, updateTodo, getItemById, toggleIsToDoCompleted }
})
