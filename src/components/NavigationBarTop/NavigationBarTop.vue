<template>
  <div class="nav-container" v-show="showNavTop">
    <div class="navTop">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0">Ea</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">文章</el-menu-item>
        <el-menu-item index="3">终端</el-menu-item>
        <el-menu-item index="4">友链</el-menu-item>
        <el-menu-item index="5">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const activeIndex = ref("1");
// const showNavTop = ref(false); // 展示顶部导航栏

//props
const props = defineProps(["scrollTopValue"]);

//computed
const showNavTop = computed(() => {
  return props.scrollTopValue >= 800;
});
//methods
</script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}
.nav-container {
  height: 80px;
  position: fixed;
  top: 0;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px #0000001a;
  z-index: 9999;
}
.navTop .el-menu-demo {
  width: 1200px;
  height: 80px;
  border-radius: 0 0 10px 10px;
}

// menu取消默认样式和过渡
.el-menu-item {
  transition: none;
  border-radius: 10px;
}
.el-menu-item.is-active {
  color: white;
}
.el-menu--horizontal {
  border-bottom: none;
  .el-menu-item {
    border-bottom: none;
  }
  .el-menu-item:not(.is-disabled):focus {
    background-color: white;
  }
  .el-menu-item.is-active:nth-child(1) {
    color: #303133 !important;
  }
  .el-menu-item:not(.is-disabled):nth-child(1):focus {
    color: #303133 !important;
  }
  .el-menu-item:not(.is-disabled):nth-child(1):hover {
    color: #303133 !important;
  }
  .el-menu-item:not(.is-disabled):hover {
    background-color: white;
  }
  .el-menu-item.is-active {
    border-bottom: none;
  }
}
</style>
