import { onMounted, type Ref, ref } from 'vue'
import { defineStore } from 'pinia'

export interface ToDoType {
  id: number
  title: string
  content: string
  isCompleted: boolean
}

export const useToDoStore = defineStore('todo', () => {
  const todos: Ref<ToDoType[]> = ref([])

  onMounted(async () => {
    const req = await fetch('/todos.json');
    todos.value = await req.json();
  })

  const addTodo = (title: string, content: string) => {
    todos.value.push({
      id: Math.round(Math.random() * 1000000000),
      title,
      content,
      isCompleted: false,
    })
    console.log('add', todos.value)
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
