<template>
  <div class="navigation-container">
    <div class="navigation-list">内容</div>
    <div class="navigation-button">
      <el-button type="info" circle size="large" plain @click="isCollapse = !isCollapse">
        <el-icon><ArrowRightBold /> </el-icon>
      </el-button>
    </div>
  </div>
</template>

<script>
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { ArrowRightBold } from "@element-plus/icons";
export default {
  name: "Navigation",
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
    ArrowRightBold,
  },
  data() {
    return {
      isCollapse: true,
    };
  },
};
</script>

<style lang="less" scoped>
.navigation-container {
  width: 30%;
  display: flex;
  flex-direction: row;

  .navigation-list {
    width: calc(~"100% - 40px");
  }
  .navigation-button {
  }
}
</style>
