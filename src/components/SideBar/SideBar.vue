<template>
  <div class="sidebar-container" :class="isCollapse ? 'sidebar-container-fading' : ''">
    <div class="sidebar-logo">
      个人信息内容填充
      <div class="sidebar-show-btn">
        <el-button type="info" circle size="large" @click="isCollapse = !isCollapse">
          <el-icon><ArrowLeftBold /> </el-icon>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { ArrowLeftBold } from "@element-plus/icons";
export default {
  name: "Navigation",
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
    ArrowLeftBold
  },
  data() {
    return {
      isCollapse: true
    };
  }
};
</script>

<style lang="less" scoped>
.sidebar-container {
  width: 30%;
  display: flex;
  flex-direction: row;
  background-color: aqua;
  //background-color: #fff;
  background-size: cover;
  height: 100%;
  transition: 0.8s;
  //top: 0;
  //left: 0;
  position: fixed;
  .sidebar-logo {
    width: 100%;
  }
  .sidebar-show-btn {
    position: absolute;
    top: 0;
    right: 0;
    .el-button {
      border: none;
    }
    .el-button:hover {
      //color: #1aa9a9a9;
      background-color: #1aa9a9a9;
      outline: 0;
    }
  }
}
.sidebar-container-fading {
  transition: 0.8s;
  margin-left: -60%;
}
</style>
