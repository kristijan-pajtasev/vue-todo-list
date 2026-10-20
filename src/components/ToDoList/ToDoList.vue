<script setup lang="ts">
import { type ToDoType } from '@/stores/toDoType.ts'
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
    <TransitionGroup name="list" tag="ul" class="item-list">
      <li
        v-for="todo in props.todos"
        :key="todo.id"
        class="py-4 border-b border-[#efefef]"
        @click="emit('setSelectedToDo', todo.id)"
      >
        <div class="mb-0 font-bold" :class="{ 'line-through': todo.isCompleted }">
          {{ todo.title }}
        </div>
        <div>{{ todo.content }}</div>
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
