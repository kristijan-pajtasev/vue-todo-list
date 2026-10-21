<script setup lang="ts">
import ToDoHeader from '@/components/ToDoHeader/ToDoHeader.vue'
import ToDoFooter from '@/components/ToDoFooter/ToDoFooter.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const showFooter = computed(() => {
  return route.path === '' || route.path === '/' || route.path === '/todo'
})
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="h-[3rem] shrink-0">
      <ToDoHeader />
    </div>
    <div class="h-full flex-[1] overflow-hidden">
      <RouterView class="h-full overflow-hidden" />
    </div>
  </div>
</template>

<style scoped></style>
