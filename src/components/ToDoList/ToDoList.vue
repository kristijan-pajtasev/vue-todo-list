<script setup lang="ts">
import { type ToDoType } from '@/stores/toDoType.ts'
const props = defineProps({
  todos: {
    required: true,
    type: Array<ToDoType>,
  },
})

</script>

<template>
  <div>ToDo List</div>
  <TransitionGroup name="list" tag="ul" class="item-list">
    <li v-for="todo in props.todos" :key="todo.id">
      <div>{{ todo.title }}</div>
      <div>{{ todo.content }}</div>
    </li>
  </TransitionGroup>
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
