import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortalView from '../views/PortalView.vue'
import Signup from '@/components/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portal',
      component: PortalView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/signup',
      name:'signup',
      component: Signup
    },
    {
      path:'/home',
      name:'home',
      component:() => import('@/views/DashboardView.vue'),
    },
    {
      path:'/chat',
      name:'chat',
      component:() => import('@/views/ChatView.vue')
    },
    {
      path:'/device',
      name:'device',
      component:() => import('@/views/DeviceView.vue')
    }
    
  ]
})

export default router
