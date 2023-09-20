/*
 * @Author: ChenYaJin
 * @Date: 2023-09-20 09:09:47
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-20 09:09:56
 * @Description: 
 */

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
