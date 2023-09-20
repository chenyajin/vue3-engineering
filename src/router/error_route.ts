/*
 * @Author: ChenYaJin
 * @Date: 2023-09-20 17:35:09
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-20 18:32:09
 * @Description: 错误页路由
 */
import { RouteRecordRaw } from 'vue-router'

export const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error_page/404_page.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'not-found',
  },
]
