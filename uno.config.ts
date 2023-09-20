/*
 * @Author: ChenYaJin
 * @Date: 2023-09-20 17:35:09
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-20 18:32:09
 * @Description: 
 */
import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [transformerDirectives()],
  // 一些实用的自定义规则
  rules: [
    [/^m-h-(.+)$/, ([, d]) => ({ 'margin-left': `${d}`, 'margin-right': `${d}` })],
    [/^m-v-(.+)$/, ([, d]) => ({ 'margin-top': `${d}`, 'margin-bottom': `${d}` })],
    [/^p-h-(.+)$/, ([, d]) => ({ 'padding-left': `${d}`, 'padding-right': `${d}` })],
    [/^p-v-(.+)$/, ([, d]) => ({ 'padding-top': `${d}`, 'padding-bottom': `${d}` })],
    [/^font-s-(.+)$/, ([, d]) => ({ 'font-size': `${d}` })],
    [/^wh-(.+)$/, ([, d]) => ({ width: `${d}`, height: `${d}` })],
  ],
  // 一些实用的自定义组合
  shortcuts: {
    'wh-full': 'w-full h-full', // width: 100%, height: 100%
    'flex-center': 'flex justify-center items-center', // flex布局居中
    'flex-x-center': 'flex justify-center', // flex布局：主轴居中
    'flex-y-center': 'flex items-center', // flex布局：交叉轴居中
    'text-overflow': 'overflow-hidden whitespace-nowrap text-ellipsis',  // 文本溢出显示省略号
    'text-break': 'whitespace-normal break-all break-words', // 文本溢出换行
  },
})
