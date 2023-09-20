import { RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomeView.vue'
import GlobalContainer from '@/layouts/global_container.vue'

export const BasicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'GlobalContainer',
    component: GlobalContainer,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomePage
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: 'counter',
        name: 'counter',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/test_module/counter_page.vue')
      }
    ]
  }
]