import { createRouter, createWebHistory } from 'vue-router'
// import component which ar needed

//alle routes hier
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/scheduled',
        name: 'scheduled',
        component: Scheduled
    },
    {
        path: '/completed',
        name: 'completed',
        component: Completed
    },
    {
        path: '/knowledgebase',
        name: 'knowledgebase',
        component: KnowledgeBase
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    }
  ]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;