import { onMounted, type Ref, ref } from 'vue'
import { defineStore } from 'pinia'

export interface ToDoType {
  id: number
  title: string
  content: string
  isCompleted: boolean
}

export const useToDoStore = defineStore('todo', () => {
  const todos: Ref<ToDoType[]> = ref([
    {
      id: 1,
      title: 'Buy groceries',
      content: 'Milk, eggs, bread, and coffee',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Finish Vue project',
      content: 'Wire up the todo store and components',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Walk the dog',
      content: 'Evening walk around the park',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Clean the house',
      content: 'Vacuum, dust, and do the dishes',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Read a book',
      content: 'Spend an hour reading before bed',
      isCompleted: false,
    },
  ])
  //
  // onMounted(async () => {
  //   const req = await fetch('/todos.json');
  //   todos.value = await req.json();
  // })

  const addTodo = (title: string, content: string) => {
    todos.value.push({
      id: Math.round(Math.random() * 1000000000),
      title,
      content,
      isCompleted: false,
    })
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
    return todos.value.find((item) => item.id === id)
  }

  return { todos, addTodo, deleteTodo, updateTodo, getItemById, toggleIsToDoCompleted }
})
