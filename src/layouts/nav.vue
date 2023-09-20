<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      :index="item.index"
      v-for="item in menuList"
      :key="item.index">
      {{item.name}}
    </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'NavComponent',
})
interface Menu {
  name: string
  path: string
  index: string
}
const activeIndex = ref(1)
const menuList: Menu[] = [
  {
    name: '首页',
    path: '/home',
    index: '1',
  },
  {
    name: '组件测试',
    path: '/home',
    index: '2',
  },
  {
    name: '404页面',
    path: '/404',
    index: '3',
  },
  {
    name: 'counter',
    path: '/counter',
    index: '4',
  }
]
const router = useRouter()
const handleSelect = (key: string,  _keyPath: string[]) => {
  const path = menuList.find(item => item.index === key)?.path || '/home'
    router.push({
      path: path
    })
}
</script>

<style lang="scss" scoped>

</style>