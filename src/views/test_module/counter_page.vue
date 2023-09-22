<template>
  <HelloWorld msg="You did it!" />
  <div class="flex-col flex-y-center">
    <h2 class="m-v-1.5em">Counter Page</h2>
    <p>
      count: {{ count }}
      <el-button type="primary" @click="onPlusOne">plus one</el-button>
    </p>
    <p>double count: {{ doubleCount }}</p>
  </div>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import { useCounterStore } from '@/stores/modules/counter'

  defineOptions({
    name: 'CounterPage',
  })

  const counterStore = useCounterStore() // 创建 counter 实例
  const count = computed(() => counterStore.count) // 引用 counter 实例里的属性 count，具有响应式
  const doubleCount = computed(() => counterStore.doubleCount) // 引用 counter 实例里的属性 doubleCount，具有响应式

  const onPlusOne = () => {
    counterStore.increment() // 调用 counter 实例里的方法
  }
  // const myName = ref('')
</script>

<style scoped></style>
