<template>
  <div class="nav-container">
    <div class="navTop">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0">Ea's Blog</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">文章</el-menu-item>
        <el-menu-item index="3">友链</el-menu-item>
        <el-menu-item index="4">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeIndex = ref("1");
</script>

<style lang="less">
.flex-grow {
  flex-grow: 1;
}
.nav-container {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #0000001a;
}
.navTop .el-menu-demo {
  width: 1200px;
  height: 80px;
}
// menu取消默认样式和过渡
.el-menu-item {
  transition: none;
}
.el-menu-item.is-active {
  color: white;
}
.el-menu--horizontal {
  border-bottom: none;
  .el-menu-item:not(.is-disabled):focus {
    background-color: white;
  }
  .el-menu-item:not(.is-disabled):hover {
    background-color: white;
  }
  .el-menu-item.is-active {
    border-bottom: none;
  }
}
</style>
