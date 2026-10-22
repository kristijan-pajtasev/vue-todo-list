import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ToDoContent from '@/components/ToDoContent/ToDoContent.vue'
import ToDoItem from '@/components/ToDoItem/ToDoItem.vue'
import NotFound from '@/components/NotFound/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ToDoContent },
    { path: '/todo', component: ToDoContent },
    { path: '/todo/:id', component: ToDoItem },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
