<template>
  <div class="home-navigation">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">XXX</el-menu-item>
      <el-menu-item index="3">XXX</el-menu-item>
      <el-menu-item index="4">XXX</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<style lang="less" scoped></style>
