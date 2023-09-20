/*
 * @Author: ChenYaJin
 * @Date: 2023-09-20 17:35:09
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-20 18:32:09
 * @Description: 路由守卫
 */
import { Router } from 'vue-router'

const whiteList = ['/home', '/about', '/404', '/counter'] // 白名单列表，不用校验，直接放行

export function createRouterGuards(router: Router) {
  // 全局导航前置守卫：beforeEach，还有 afterEach、beforeResolve
  router.beforeEach(async (to, _from, next) => {
    const hasToken = false
    if (hasToken) {
      next()
    } else {
      const isValid = whiteList.find((path) => to.path.startsWith(path))
      if (isValid) {
        next()
      } else {
        next(`/home`)
      }
    }
  })
  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
