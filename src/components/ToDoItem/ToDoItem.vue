<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { type ToDoType, useToDoStore } from '@/stores/toDoType.ts'

// Inicijalizacija route objekta
const route = useRoute()
const router = useRouter()
const todoStore = useToDoStore()
const itemId = computed(() => parseInt(route.params.id as string))
const selectedItem = computed(() => {
  return todoStore.getItemById(itemId.value)
})
if (!selectedItem.value) {
  router.replace({ name: 'NotFound' })
}

const toggleCompleted = (todo: ToDoType) => {
  console.log('toggle completed')
  todoStore.updateTodo(todo.id, todo.title, todo.content, !todo.isCompleted)
}
const showEditTodo = ref(false)

const editTitle = ref('')
const editContent = ref('')
const editTodo = (selectedTodo: ToDoType) => {
  if (!selectedItem.value) return
  editTitle.value = selectedTodo.title || ''
  editContent.value = selectedTodo.content || ''
  showEditTodo.value = true
}

const cancelEditForm = () => {
  editTitle.value = ''
  editContent.value = ''
  showEditTodo.value = false
}
const saveEditForm = (selectedItem: ToDoType) => {
  //   if (!selectedItemId.value || !selectedItem.value?.id) return
  todoStore.updateTodo(
    selectedItem?.id,
    editTitle.value,
    editContent.value,
    selectedItem?.isCompleted,
  )
  editTitle.value = ''
  editContent.value = ''
  showEditTodo.value = false
}

// const showConfirmDeleteForm = ref(false)
// const handleConfirmDelete = () => {
//   if (!!selectedItem.value) {
//     todoStore.deleteTodo(selectedItem.value.id)
//     itemId.value = undefined
//   }
// }
</script>

<template>
  <!--  <div><button @click="selectedItemId = undefined">All todos</button></div>-->
  <div v-if="selectedItem" class="p-4 h-full">
    <div class="flex flex-col h-full">
      <div>
        <h1 class="text-lg font-bold">{{ selectedItem.title }}</h1>
        <div class="text-sm text-[#999]">
          {{ selectedItem.isCompleted ? 'Completed' : 'Not Completed' }}
        </div>
        <hr class="my-4 border-[#ccc]" />
      </div>
      <div>{{ selectedItem.content }}</div>
      <div>
        <div>
          <button @click="toggleCompleted(selectedItem)">
            Mark as {{ selectedItem?.isCompleted ? 'incomplete' : 'completed' }}
          </button>
        </div>
        <div>
          <div><button @click="editTodo(selectedItem)">Edit</button></div>
          <!--          <div><button @click="showConfirmDeleteForm = true">Delete</button></div>-->
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body" v-if="showEditTodo && selectedItem">
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
          <div><button @click="saveEditForm(selectedItem)">Save</button></div>
        </div>
      </div>
    </div>
  </Teleport>
  <!--  <Teleport to="body" v-if="showConfirmDeleteForm && selectedItem">-->
  <!--    <div class="top-0 bottom-0 left-0 right-0 fixed z-50 bg-[#cccccc66] w-full h-full">-->
  <!--      <div class="w-[30rem] p-4 max-w-full bg-white rounded-xl overflow-hidden">-->
  <!--        <div>-->
  <!--          Are you sure you want to delete?-->
  <!--        </div>-->
  <!--        <div>-->
  <!--          <div><button @click="showConfirmDeleteForm = false">Cancel</button></div>-->
  <!--          <div><button @click="handleConfirmDelete">Save</button></div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </Teleport>-->
</template>
