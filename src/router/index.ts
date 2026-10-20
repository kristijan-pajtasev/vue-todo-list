import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import ToDoContent from '@/components/ToDoContent/ToDoContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ToDoContent },
    { path: '/todo', component: ToDoContent },
    { path: '/todo/:id', component: ToDoList }
  ],
})

export default router
