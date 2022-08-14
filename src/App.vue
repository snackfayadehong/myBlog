<template>
  <div class="blog-container" >
    <div class="cover">
      <cover></cover>
    </div>
    <div class="nav" v-show="showNav">
<!--      <navigation-bar-top></navigation-bar-top>-->
    </div>
    <div class="main-container"></div>
  </div>
</template>

<script>
import NavigationBarTop from "./components/NavigationBarTop/NavigationBarTop.vue";
import Cover from "./components/Cover/Cover.vue";
export default {
  name: "App",
  components: {
    NavigationBarTop,
    Cover
  },
  data(){
    return{
      showNav:true
    }
  }
};
</script>

<style lang="less" scoped>
.cover{
  height: 100vh;
  width: 100%;
}
</style>
