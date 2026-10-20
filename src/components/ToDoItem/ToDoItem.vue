<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useToDoStore } from '@/stores/toDoType.ts'

// Inicijalizacija route objekta
const route = useRoute()
const todoStore = useToDoStore()
const itemId = computed(() => parseInt(route.params.id as string))
const selectedItem = computed(() => {
  return todoStore.getItemById(itemId.value)
})
</script>

<template>
  {{ selectedItem }}
</template>
