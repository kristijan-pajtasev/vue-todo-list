<script setup lang="ts">
import ToDoHeader from '@/components/ToDoHeader/ToDoHeader.vue'
import ToDoContent from '@/components/ToDoContent/ToDoContent.vue'
</script>

<template>
  <div class="h-full flex flex-col">
    <ToDoHeader/>
    <ToDoContent class="flex-1 overflow-auto" />
    <div>footer</div>
  </div>
</template>

<style scoped></style>
