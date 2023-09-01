import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/pages/TheHome.vue'
import TheLogin from '@/pages/auth/TheLogin.vue'
import TheSignup from '@/pages/auth/TheSignup.vue'
import TheConfirmation from '@/pages/auth/TheConfirmation.vue'

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
        },
        {
            path: '/email-confirmation/:token',
            name: 'email-confirmation',
            component: TheConfirmation,
            meta: {
                guest: true
            }
        },
        {
            path: '/phone-confirmation/:token',
            name: 'phone-confirmation',
            component: TheConfirmation,
            meta: {
                guest: true
            }
        }
    ]
})

export default router
