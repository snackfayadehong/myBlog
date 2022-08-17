<template>
 <div class="scroll-container" @click="goToMain" id="goto" >
   <el-icon class="scroll-down"><ArrowDownBold /></el-icon>
 </div>
</template>

<script setup>
import {ArrowDownBold} from '@element-plus/icons'

// 向下滚动方法
const goToMain = ()=>{
  //获取元素后通过scrollIntoView指定滚动方式
  document.getElementById("goto").scrollIntoView({behavior:'smooth'})
  console.log(document.documentElement.scrollTop);
}
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
    cursor: pointer;
  }
}
</style>