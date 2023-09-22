<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavComponent from './nav.vue'

  defineOptions({
    name: 'GlobalContainer',
  })
</script>

<template>
  <NavComponent />
  <RouterView />
</template>
