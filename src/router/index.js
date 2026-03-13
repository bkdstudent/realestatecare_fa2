import { createRouter, createWebHistory } from 'vue-router'
// import component which ar needed
import DashBoard from "@/components/DashBoard.vue";
import Scheduled from "@/components/Scheduled.vue";
import Completed from "@/components/Completed.vue";
import KnowledgeBase from "@/components/KnowledgeBase.vue";
import Settings from "@/components/Settings.vue";

//route_table
const routes = [
    {
        path: '/',
        name: 'home',
        component: DashBoard
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