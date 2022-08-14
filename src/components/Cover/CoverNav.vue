<template>
  <div class="cover-nav-container">
    <div class="cover-nav-main">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" >
        <el-menu-item index="0">Blog's</el-menu-item>
        <el-menu-item index="1">分类</el-menu-item>
        <el-menu-item index="2">终端</el-menu-item>
        <el-menu-item index="3">友链</el-menu-item>
        <el-menu-item index="4">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeIndex = ref("0");
</script>

<style lang="less" scoped>

// 设置menu样式
.el-menu--horizontal{
  .is-active{
    color: aqua !important;
  }
  border-bottom: none;
  height: 100px;
  border-radius: 5px;
  width: 600px;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-around;
  align-items: center;
  background-color: #F8F8FF00;
  .el-menu-item{
    transition: background-color .5s;
    border-radius: 5px;
    height: 90%;
    font-size: 18px;
    font-weight: bold;
  }
  .el-menu-item.is-active{
    border-bottom: none;
    backdrop-filter: blur(5px);
    background-color:#F8F8FFE6;
    color: aqua !important;
  }
}
.el-menu--horizontal:hover{
  backdrop-filter: blur(5px);
  //背景模糊
  background-color: #F8F8FF66;
  transition: 0.5s;
}
.el-menu-item:not(.is-disabled):hover{
  color: aqua;
}
</style>
