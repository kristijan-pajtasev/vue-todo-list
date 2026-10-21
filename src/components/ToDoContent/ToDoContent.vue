<script setup lang="ts">
import ToDoListWithFilter from '@/components/ToDoListWithFilter/ToDoListWithFilter.vue'
import SelectToDoContent from '@/components/SelectToDoContent/SelectToDoContent.vue'
</script>
<template>
  <div class="bg-white w-full p-4 flex flex-col md:bg-[#f4f4f4]">
    <div class="flex flex-row md:gap-[1rem] md:w-[90rem] md:max-w-full md:m-auto h-full">
      <ToDoListWithFilter class="max-md:w-full md:w-[20rem] shrink-0" />
      <div class="hidden md:block bg-white flex-1 rounded-lg overflow-hidden p-4 shrink-0">
        <SelectToDoContent />
      </div>
    </div>
  </div>
</template>
