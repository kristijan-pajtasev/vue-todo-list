<script setup lang="ts">
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import { type ToDoType, useToDoStore } from '@/stores/toDoType.ts'
import { computed, ref } from 'vue'
const todoStore = useToDoStore()

const searchQuery = ref('')
const filteredToDoList = computed(() => {
  return todoStore.todos.filter((todo) => {
    return (
      todo.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      todo.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
})

const selectedToDoId = ref<number>()

const setSelectedToDoId = (id: number) => {
  selectedToDoId.value = id
}

const selectedToDo = computed(() => {
  return todoStore.todos.find((todo) => todo.id === selectedToDoId.value)
})
const toggleCompleted = (todo: ToDoType) => {
  todoStore.updateTodo(todo.id, todo.title, todo.content, !todo.isCompleted)
}
const showEditTodo = ref(false)

const editTitle = ref('')
const editContent = ref('')
const editTodo = () => {
  if (!selectedToDo.value) return
  editTitle.value = selectedToDo.value.title || ''
  editContent.value = selectedToDo.value.content || ''
  showEditTodo.value = true
}

const cancelEditForm = () => {
  editTitle.value = ''
  editContent.value = ''
  showEditTodo.value = false
}
const saveEditForm = () => {
  if (!selectedToDoId.value || !selectedToDo.value?.id) return
  todoStore.updateTodo(
    selectedToDo.value?.id,
    editTitle.value,
    editContent.value,
    selectedToDo.value?.isCompleted,
  )
  editTitle.value = ''
  editContent.value = ''
  showEditTodo.value = false
}

const showConfirmDeleteForm = ref(false);
const handleConfirmDelete = () => {
  if(!!selectedToDo.value) {
    todoStore.deleteTodo(selectedToDo.value.id)
    selectedToDoId.value = undefined;
  }
}
</script>
<template>
  <div class="bg-white w-full p-4">
    <div v-if="selectedToDoId && selectedToDo">
      <div><button @click="selectedToDoId = undefined">All todos</button></div>
      <div>
        <div>
          <h1 class="text-lg font-bold">{{ selectedToDo.title }}</h1>
          <div class="text-sm text-[#999]">
            {{ selectedToDo.isCompleted ? 'Completed' : 'Not Completed' }}
          </div>
          <hr class="my-4 border-[#ccc]" />
          <div>{{ selectedToDo.content }}</div>
          <div>
            <div><button @click="toggleCompleted(selectedToDo)">Mark as completed</button></div>
            <div>
              <div><button @click="editTodo()">Edit</button></div>
              <div><button @click="showConfirmDeleteForm = true">Delete</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="h-full">
      <h1>My Todos</h1>
      <div class="my-4">
        <input
          v-model="searchQuery"
          placeholder="Search..."
          class="bg-[#E3E3E3] px-4 py-1 rounded-md w-full overflow-hidden border border-[#ccc]"
        />
      </div>

      <ToDoList :todos="filteredToDoList" @setSelectedToDo="setSelectedToDoId" />
    </div>
  </div>
  <Teleport to="body" v-if="showEditTodo && selectedToDo">
    <div class="top-0 bottom-0 left-0 right-0 fixed z-50 bg-[#cccccc66] w-full h-full">
      <div class="w-[30rem] p-4 max-w-full bg-white rounded-xl overflow-hidden">
        <div>
          <label>title</label>
          <input type="text" v-model="editTitle" />
        </div>
        <div>
          <label>content</label>
          <textarea v-model="editContent" />
        </div>
        <div>
          <div><button @click="cancelEditForm">Cancel</button></div>
          <div><button @click="saveEditForm">Save</button></div>
        </div>
      </div>
    </div>
  </Teleport>
  <Teleport to="body" v-if="showConfirmDeleteForm && selectedToDo">
    <div class="top-0 bottom-0 left-0 right-0 fixed z-50 bg-[#cccccc66] w-full h-full">
      <div class="w-[30rem] p-4 max-w-full bg-white rounded-xl overflow-hidden">
        <div>
          Are you sure you want to delete?
        </div>
        <div>
          <div><button @click="showConfirmDeleteForm = false">Cancel</button></div>
          <div><button @click="handleConfirmDelete">Save</button></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
