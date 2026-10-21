<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { type ToDoType, useToDoStore } from '@/stores/toDoType.ts'
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import ToDoListWithFilter from '@/components/ToDoListWithFilter/ToDoListWithFilter.vue'

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

const showConfirmDeleteForm = ref(false)
const handleConfirmDelete = () => {
  if (!!selectedItem.value) {
    todoStore.deleteTodo(selectedItem.value.id)
    router.push({ path: '/' })
  }
}
</script>

<template>
  <div v-if="selectedItem" class="max-md:p-4 h-full">
    <div class="bg-white w-full md:p-4 flex flex-col max-md:h-full md:bg-[#f4f4f4] md:h-full">
      <div class="flex flex-row md:gap-[1rem] md:w-[90rem] md:max-w-full md:m-auto h-full">
        <div class="hidden md:block max-md:w-full md:w-[20rem] shrink-0">
          <ToDoListWithFilter />
        </div>
        <div class="bg-white flex-1 md:p-4 md:rounded-lg md:overflow-hidden shrink-0">
          <div class="flex flex-col h-full justify-between">
            <div>
              <div>
                <div class="block md:hidden">
                  <RouterLink to="/todo" class="text-sm text-[#999] cursor-pointer flex flex-row items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="25 93.5 10 18"
                      >
                        <defs />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g id="svg1" mask="url(#mask-for-svg11)">
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <mask id="mask-for-svg11">
                            <rect width="18" height="18" x="20" y="93.5" fill="#ffffff" />
                          </mask>
                          <g transform="matrix(0.75 0 0 0.75 20 93.5)">
                            <path
                              d="m15 6-6 6 6 6"
                              color="rgb(55, 54, 77)"
                              fill="none"
                              stroke="#CCC"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.5px"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span>Back to list</span></RouterLink
                  >
                </div>
                <h1 class="text-[1.5rem] font-bold">{{ selectedItem.title }}</h1>
                <div class="text-sm text-[#999]">
                  {{ selectedItem.isCompleted ? 'Completed' : 'Not Completed' }}
                </div>
                <hr class="my-4 border-[#ccc]" />
              </div>
              <div>{{ selectedItem.content }}</div>
            </div>
            <div class="border-t border-[#f4f4f4] flex flex-col gap-[0.5rem]">
              <div>
                <button
                  class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"
                  @click="toggleCompleted(selectedItem)"
                >
                  Mark as {{ selectedItem?.isCompleted ? 'incomplete' : 'completed' }}
                </button>
              </div>
              <div class="flex flex-row gap-[0.5rem]">
                <button
                  class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"
                  @click="editTodo(selectedItem)"
                >
                  Edit
                </button>
                <button
                  class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center border border-[#707070] rounded-full"
                  @click="showConfirmDeleteForm = true"
                >
                  Delete
                </button>
              </div>
            </div>
            <!--      <div>-->
            <!--        <div>-->
            <!--          <button @click="toggleCompleted(selectedItem)">-->
            <!--            Mark as {{ selectedItem?.isCompleted ? 'incomplete' : 'completed' }}-->
            <!--          </button>-->
            <!--        </div>-->
            <!--        <div>-->
            <!--          <div><button @click="editTodo(selectedItem)">Edit</button></div>-->
            <!--          &lt;!&ndash;          <div><button @click="showConfirmDeleteForm = true">Delete</button></div>&ndash;&gt;-->
            <!--        </div>-->
            <!--      </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  <div><button @click="selectedItemId = undefined">All todos</button></div>-->
  <!--  <div v-if="selectedItem" class="p-4 h-full">-->
  <!--    <div class="flex flex-col h-full justify-between">-->
  <!--      <div>-->
  <!--        <div>-->
  <!--          <div><RouterLink to="/todo">Back to todos</RouterLink></div>-->
  <!--          <h1 class="text-lg font-bold">{{ selectedItem.title }}</h1>-->
  <!--          <div class="text-sm text-[#999]">-->
  <!--            {{ selectedItem.isCompleted ? 'Completed' : 'Not Completed' }}-->
  <!--          </div>-->
  <!--          <hr class="my-4 border-[#ccc]" />-->
  <!--        </div>-->
  <!--        <div>{{ selectedItem.content }}</div>-->
  <!--      </div>-->
  <!--      <div class="border-t border-[#f4f4f4] flex flex-col gap-[0.5rem]">-->
  <!--        <div>-->
  <!--          <button-->
  <!--            class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"-->
  <!--            @click="toggleCompleted(selectedItem)"-->
  <!--          >-->
  <!--            Mark as {{ selectedItem?.isCompleted ? 'incomplete' : 'completed' }}-->
  <!--          </button>-->
  <!--        </div>-->
  <!--        <div class="flex flex-row gap-[0.5rem]">-->
  <!--          <button-->
  <!--            class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"-->
  <!--            @click="editTodo(selectedItem)"-->
  <!--          >-->
  <!--            Edit-->
  <!--          </button>-->
  <!--          <button-->
  <!--            class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center border border-[#707070] rounded-full"-->
  <!--            @click="showConfirmDeleteForm = true"-->
  <!--          >-->
  <!--            Delete-->
  <!--          </button>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      &lt;!&ndash;      <div>&ndash;&gt;-->
  <!--      &lt;!&ndash;        <div>&ndash;&gt;-->
  <!--      &lt;!&ndash;          <button @click="toggleCompleted(selectedItem)">&ndash;&gt;-->
  <!--      &lt;!&ndash;            Mark as {{ selectedItem?.isCompleted ? 'incomplete' : 'completed' }}&ndash;&gt;-->
  <!--      &lt;!&ndash;          </button>&ndash;&gt;-->
  <!--      &lt;!&ndash;        </div>&ndash;&gt;-->
  <!--      &lt;!&ndash;        <div>&ndash;&gt;-->
  <!--      &lt;!&ndash;          <div><button @click="editTodo(selectedItem)">Edit</button></div>&ndash;&gt;-->
  <!--      &lt;!&ndash;          &lt;!&ndash;          <div><button @click="showConfirmDeleteForm = true">Delete</button></div>&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;        </div>&ndash;&gt;-->
  <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
  <!--    </div>-->
  <!--  </div>-->
  <Teleport to="body" v-if="showEditTodo && selectedItem">
    <div
      class="top-0 bottom-0 left-0 right-0 fixed z-50 bg-[#000000aa] backdrop-blur w-full h-full flex flex-row items-center justify-center"
      @click="showEditTodo = false"
    >
      <div
        class="max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:w-full max-md:h-full bg-white p-4 md:w-[40rem] md:max-w-full md:rounded-lg md:overflow-hidden md_m-auto"
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
                v-model="editTitle"
              />
            </div>
            <div>
              <label class="font-bold mb-[0.5rem] block" for="content">Content:</label>
              <textarea
                class="p-2 bg-[#f4f4f4] border border-[#707070] rounded-lg overflow-hidden w-full resize-none h-[5rem]"
                id="content"
                v-model="editContent"
              />
            </div>
            <div></div>
          </div>
          <div class="border-t border-[#f4f4f4] flex flex-col gap-[0.5rem]">
            <button
              class="p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"
              @click="saveEditForm(selectedItem)"
            >
              Save
            </button>
            <button
              class="p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center border border-[#707070] rounded-full"
              @click="cancelEditForm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="top-0 bottom-0 left-0 right-0 fixed z-50 bg-[#cccccc66] w-full h-full">-->
    <!--      <div class="w-[30rem] p-4 max-w-full bg-white rounded-xl overflow-hidden">-->
    <!--        <div>-->
    <!--          <label>title</label>-->
    <!--          <input type="text" v-model="editTitle" />-->
    <!--        </div>-->
    <!--        <div>-->
    <!--          <label>content</label>-->
    <!--          <textarea v-model="editContent" />-->
    <!--        </div>-->
    <!--        <div>-->
    <!--          <div><button @click="cancelEditForm">Cancel</button></div>-->
    <!--          <div><button @click="saveEditForm(selectedItem)">Save</button></div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </Teleport>
  <Teleport to="body" v-if="showConfirmDeleteForm && selectedItem">
    <div
      class="top-0 bottom-0 left-0 right-0 fixed z-50 bg-[#000000aa] backdrop-blur w-full h-full flex flex-row items-center justify-center"
    >
      <div
        class="max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:w-full max-md:h-full bg-white p-4 md:w-[40rem] md:max-w-full md:rounded-lg md:overflow-hidden md_m-auto"
      >
        <div class="text-center text-[1.5rem]">Are you sure you want to delete?</div>
        <div class="border-t border-[#f4f4f4] flex flex-col gap-[0.5rem] mt-[1rem]">
          <div>
            <button
              class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center border border-[#707070] rounded-full"
              @click="showConfirmDeleteForm = false"
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              class="cursor-pointer p-1 font-bold w-full h-full text-center flex flex-row justify-center items-center bg-[#1976D2] text-white rounded-full"
              @click="handleConfirmDelete"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
