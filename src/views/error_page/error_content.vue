<!--
 * @Author: ChenYaJin
 * @Date: 2023-09-20 17:35:09
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2023-09-20 18:32:09
 * @Description: 
-->
<template>
  <div class="error-page">
    <div class="content">
      <img :src="src" alt="404" />
      <div class="text-con">
        <span>{{ desc }}</span>
      </div>
      <div class="edit-btn">
        <el-button round plain type="primary" @click="backHome">返回首页</el-button>
        <el-button round plain>返回上一页({{ second }}s)</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    code: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  })
  const router = useRouter()
  const second = ref(5)
  const timer = ref()
  const backHome = () => {
    router.replace({
      path: '/',
    })
  }
  const backPrev = () => {
    router.go(-1)
  }
  onMounted(() => {
    timer.value = setInterval(() => {
      if (second.value === 0) {
        backPrev()
      } else {
        second.value--
      }
    }, 1000)
  })
  onBeforeMount(() => {
    clearInterval(timer.value)
  })
  onBeforeRouteLeave(() => {
    clearInterval(timer.value)
  })
</script>

<style scoped lang="scss">
  @import url(./error.scss);
</style>
