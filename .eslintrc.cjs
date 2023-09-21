/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    // 指定eslint解析器
    parser: '@typescript-eslint/parser',
    // 允许使用 import
    sourceType: 'module',
    // 允许解析 jsx
    ecmaFeatures: {
      jsx: true,
    },
  },
}
