<template>
 <div class="scroll-container">
   <el-icon class="scroll-down"><ArrowDownBold /></el-icon>
 </div>
</template>

<script setup>
import {ArrowDownBold} from '@element-plus/icons'
</script>

<style lang="less" scoped>
@keyframes scroll-down  {
  0%,20%,50%,80%,100%{
    transform: translateY(0);
    opacity: 0.3;
  }
  40%{
    transform: translateY(-30px);
    opacity: 0.5;
  }
  60%{
    transform: translateY(-15px);
    opacity: 0.7;
  }
}
.scroll-container {

  .scroll-down {
    color: white;
    animation:scroll-down 2s infinite;
    height: 60px;
    font-size: 30px;
    width: 30px;
  }
}
</style>