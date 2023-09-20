<!--
 * @Author: ChenYaJin
 * @Date: 2023-09-20 17:35:09
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-20 18:32:09
 * @Description: 
-->
<template>
  <error-content code="404" desc="Oh~~您的页面好像飞走了~" :src="src" />
</template>

<script setup lang="ts">
  import error404 from '@/assets/images/404.png'
  import errorContent from './error_content.vue'

  const src = computed(() => {
    return error404
  })
</script>
