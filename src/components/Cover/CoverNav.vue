<template>
  <div class="cover-nav-container">
    <div class="cover-nav-main">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" >
        <el-menu-item index="0">
          <el-icon class="Cover-icons"><HomeFilled /></el-icon>
          Blog's
        </el-menu-item>
        <el-menu-item index="1">
          <el-icon class="Cover-icons"><Grid /></el-icon>
          分类
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon class="Cover-icons"><Operation /></el-icon>
          终端</el-menu-item>
        <el-menu-item index="3">
          <el-icon class="Cover-icons"><Link /></el-icon>
          友链
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon class="Cover-icons"><InfoFilled /></el-icon>
          关于
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
//icon图标
import { HomeFilled,Grid,Operation,Link,InfoFilled } from '@element-plus/icons'
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
    line-height: 90%;
    transition: background-color .5s;
    border-radius: 5px;
    height: 90%;
    font-size: 18px;
    font-weight: bold;
    flex-direction: column;
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
.Cover-icons{
  font-size: 40px;
  width: 40px;
  margin-bottom: 10px;
}
.icon path{
  color: aqua;
}
</style>
