import { createRouter, createWebHistory } from 'vue-router'
import ToDoContent from '@/components/ToDoContent/ToDoContent.vue'
import ToDoItem from '@/components/ToDoItem/ToDoItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ToDoContent },
    { path: '/todo', component: ToDoContent },
    { path: '/todo/:id', component: ToDoItem }
  ],
})

export default router
