<script setup lang="ts">
import ToDoHeader from '@/components/ToDoHeader/ToDoHeader.vue'
import ToDoFooter from '@/components/ToDoFooter/ToDoFooter.vue'
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="h-[3rem] shrink-0">
      <ToDoHeader />
    </div>
    <div class="h-full flex-[1] overflow-hidden">
      <RouterView />
    </div>
    <div class="h-[3rem] shrink-0">
      <ToDoFooter />
    </div>
  </div>
</template>

<style scoped></style>
