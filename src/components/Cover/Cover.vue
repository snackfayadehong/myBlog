<template>
  <div class="cover-container">
<!--    封面内容   -->
    <div class="cover-main">
      <h1>Ea</h1>
      <span>不说话，装高手</span>
      <cover-nav class="cover-nav"></cover-nav>
    </div>
  </div>
</template>

<script>
import CoverNav from './CoverNav.vue'
export default {
  name: "Cover",
  components:{
    CoverNav
  }
};
</script>

<style lang="less" scoped>

.cover-container{
  height: 100%;
  width: 100%;
  background-image: url("/src/assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
  align-items: center;

  .cover-main{
      text-align: center;
    h1{
      font-size: 60px;
      color: white;
    }
    span{
      display: block;
      font-size: 20px;
      color: white;
      padding-bottom: 100px
    }

  }
}



</style>