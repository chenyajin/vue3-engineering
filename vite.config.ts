import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'


export default defineConfig({
  base: './',  // 设置打包路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 设置 `@` 指向 `src` 目录
      '#': fileURLToPath(new URL('./types', import.meta.url)),  // 设置 `#` 指向 `types` 目录
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入 vue、vue router 相关API
      resolvers: [ElementPlusResolver()], // 自定义解析器，配置 unplugin-vue-components 使用
      dts: 'types/auto-imports.d.ts', // 自动生成 'auto-imports.d.ts'全局声明文件
      dirs: ['./src'], // 此目录下相关 API 自动导入
    }),
    Components({
      dts: './types/components.d.ts', // 按需导入组件，相关组件声明放置于 components.d.ts
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    open: true, // 服务启动自动打开浏览器
    // host: '127.0.0.1', // 设置服务启动地址
    // port: 5000, // 设置服务启动端口号
    cors: true, // 允许跨域
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://xxxxxxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    target: 'es2015', // 设置最终构建的浏览器兼容目标
    sourcemap: false, // 构建后是否生成 source map 文件
    chunkSizeWarningLimit: 2000, //  chunk 大小警告的限制
    reportCompressedSize: false,  // 启用/禁用 gzip 压缩大小报告
    outDir: 'dist', //设置打包输出目录，默认dist
    assetsDir: 'assets', //设置静态文件输出目录，默认assets
    assetsInlineLimit: 4096, // 设置引用资源 base64 内联的最大值，默认4096=4kb
  },
})
