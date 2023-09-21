<!--
 * @Author: ChenYaJin
 * @Date: 2023-09-20 17:35:09
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-21 15:49:32
 * @Description: 
-->
<template>
  <div>
    <el-row class="mb-4 mt-1">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-row>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  defineOptions({
    name: 'ElementPlusComponent',
  })
  const value = ref('')
  const myName = ref('')
  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
  ]
</script>

<style scoped></style>
