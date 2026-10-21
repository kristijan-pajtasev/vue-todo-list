<script setup lang="ts">
import { type ToDoType, useToDoStore } from '@/stores/toDoType.ts'
import ArrowRight from '@/components/ArrowRight/ArrowRight.vue'
import CompletedCheckmark from '@/components/CompletedCheckmark/CompletedCheckmark.vue'
const todoStore = useToDoStore()

const props = defineProps({
  todos: {
    required: true,
    type: Array<ToDoType>,
  },
  selectedToDoId: {
    required: false,
    type: Number,
  },
})

const emit = defineEmits<{
  (e: 'setSelectedToDo', selectedId: number): void
}>()
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <TransitionGroup name="list" tag="ul" class="item-list h-full overflow-auto">
      <li
        v-for="todo in props.todos"
        :key="todo.id"
        class="py-4 border-b border-[#efefef] flex flex-row gap-[1rem] items-center justify-between"
        @click="emit('setSelectedToDo', todo.id)"
      >
        <div class="w-[1.5rem]">
          <div v-if="todo.isCompleted">
            <CompletedCheckmark @click="todoStore.toggleIsToDoCompleted(todo.id)" />
          </div>
          <div v-else>
            <div
              @click="todoStore.toggleIsToDoCompleted(todo.id)"
              class="w-[1.4rem] h-[1.4rem] border border-[2px] border-[#636363] rounded-full"
            />
          </div>
        </div>
        <div class="flex-[1]">
          <div class="mb-0 font-bold" :class="{ 'line-through': todo.isCompleted }">
            {{ todo.title }}
          </div>
          <div class="line-clamp-1 text-ellipsis">{{ todo.content }}</div>
        </div>
        <div>
          <RouterLink :to="{ path: `/todo/${todo.id}` }">
            <ArrowRight />
          </RouterLink>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
