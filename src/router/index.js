import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/pages/TheHome.vue'
import TheLogin from '@/pages/TheLogin.vue'
import TheSignup from '@/pages/TheSignup.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TheHome
        },
        {
            path: '/login',
            name: 'login',
            component: TheLogin,
            meta: {
                guest: true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: TheSignup,
            meta: {
                guest: true
            }
        }
    ]
})

export default router
