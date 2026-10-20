<script setup lang="ts">
import ToDoHeader from '@/components/ToDoHeader/ToDoHeader.vue'
import ToDoContent from '@/components/ToDoContent/ToDoContent.vue'
import ToDoFooter from '@/components/ToDoFooter/ToDoFooter.vue'
</script>

<template>
  <div class="h-full flex flex-col">
    <ToDoHeader/>
    <ToDoContent class="flex-1 overflow-auto" />
    <ToDoFooter />
  </div>
</template>

<style scoped></style>
