<template>
  <div class="blog-container" >
    <div class="cover">
      <cover></cover>
    </div>
    <div class="nav" v-show="showNav">
<!--      <navigation-bar-top></navigation-bar-top>-->
    </div>
    <div class="main">
      <div class="main-container container">
        <Article></Article>
        <site-information></site-information>
      </div>
    </div>
    <div class="blog-footer">
      <Footer></Footer>
    </div>
    <div class="goToTop">
      <BackToTop></BackToTop>
    </div>
  </div>
</template>

<script>
import NavigationBarTop from "./components/NavigationBarTop/NavigationBarTop.vue";
import Cover from "./components/Cover/Cover.vue";
import Article from "./components/Article/Article.vue";
import SiteInformation from "./components/SiteInformation/SiteInformation.vue";
import Footer from "./components/Footer/Footer.vue";
import BackToTop from "./components/BackToTop/BackToTop.vue";
export default {
  name: "App",
  components: {
    NavigationBarTop,
    Cover,
    Article,
    SiteInformation,
    Footer,
    BackToTop
  },
  data(){
    return{
      showNav:true
    }
  },
};
</script>

<style lang="less" scoped>
.blog-container{
  display: flex;
  flex-direction: column;
}
.cover{
  height: calc(100vh + 100px);
  width: 100%;
}
.main{
  width: 100%;
  display: flex;
  position: relative;
  margin-top: -5%;
  top: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
}
.main-container{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
}
.blog-footer{
  text-align: center;
  height: 100px;
  position: relative;
  bottom: 0;
}
</style>
