import type { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { BasicRoutes } from './modules/basic/index' // 导入基础模块路由
import { errorRoutes } from './error_route' // 导入错误页路由
import { createRouterGuards } from './guards' // 导入路由守卫

// 组合路由
const constantRouter: RouteRecordRaw[] = [...BasicRoutes, ...errorRoutes]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 禁止尾部斜杠
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: constantRouter,
})

// 初始化路由函数，并注入路由守卫
export function setupRouter(app: App<Element>) {
  app.use(router)
  createRouterGuards(router)
}

export default router
