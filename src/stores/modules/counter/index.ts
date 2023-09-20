import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


// 基于组合式API，像写组件一样写store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})