/*
 * @Author: wjc
 * @Date: 2023-05-07 20:59:28
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-20 17:46:25
 * @Description:
 */
import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

// import iconList from './src/components/Icon/icons'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
      },
      // cdn: 'https://esm.sh/'
      // collections: {
      //   custom: {},
      //   'ant-design': () => import('@iconify-json/ant-design/icons.json').then((i) => i.default),
      //   logos: () => import('@iconify-json/logos/icons.json').then((i) => i.default),
      // },
    }),
  ],
  transformers: [transformerDirectives()],
  rules: [
    [/^m-h-(.+)$/, ([, d]) => ({ 'margin-left': `${d}`, 'margin-right': `${d}` })],
    [/^m-v-(.+)$/, ([, d]) => ({ 'margin-top': `${d}`, 'margin-bottom': `${d}` })],
    [/^p-h-(.+)$/, ([, d]) => ({ 'padding-left': `${d}`, 'padding-right': `${d}` })],
    [/^p-v-(.+)$/, ([, d]) => ({ 'padding-top': `${d}`, 'padding-bottom': `${d}` })],
    [/^max-w-(\s+)$/, ([, d]) => ({ 'max-width': `${d}` })],
    [/^max-h-[(\s+)]$/, ([, d]) => ({ 'max-height': `${d}` })],
    [/^font-s-(.+)$/, ([, d]) => ({ 'font-size': `${d}` })],
    [/^wh-(.+)$/, ([, d]) => ({ width: `${d}`, height: `${d}` })],
    [/^bg-color-(\w+)$/, ([, d]) => ({ 'background-color': `#${d}` })],
  ],
  // safelist: iconList,
  shortcuts: {
    'wh-full': 'w-full h-full',
    'mp-0': 'm-0 p-0',
    'ma-x': 'mt-0 mb-0 ml-auto mr-auto',
    'inline-flex-center': 'inline-flex justify-center items-center',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    // 文本溢出显示省略号
    'text-overflow': 'overflow-hidden whitespace-nowrap text-ellipsis',
    // 文本溢出换行
    'text-break': 'whitespace-normal break-all break-words',
  },
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      success: 'var(--success-color)',
      warning: 'var(--warning-color)',
      danger: 'var(--danger-color)',
      error: 'var(--error-color)',
      info: 'var(--info-color)',
      color: {
        '1': 'var(--text-color-1)',
        '2': 'var(--text-color-2)',
        '3': 'var(--text-color-3)',
        place: 'var(--text-color-place)',
        disabled: 'var(--text-color-disabled)',
        whiter: 'var(--text-color-whiter)',
      },
      bg: {
        color: 'var(--bg-color)',
        page: 'var(--bg-page)',
        place: 'var(--text-color-place)',
        divider: 'var(--bg-divider)',
        overlay: 'var(--bg-overlay)',
        primary: 'var(--primary-color)',
      },
    },
  },
})
