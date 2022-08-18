<template>
  <div class="blog-container">
    <div class="cover">
      <cover></cover>
    </div>
    <div class="nav" v-show="showNav">
      <!--      <navigation-bar-top></navigation-bar-top>-->
    </div>
    <div class="main">
      <div class="main-container container">
        <NavigationBarTop :scroll-top-value="scrollTopValue"></NavigationBarTop>
        <Article></Article>
        <site-information></site-information>
      </div>
    </div>
    <div class="blog-footer">
      <Footer></Footer>
    </div>
    <div class="goToTop" v-show="showBackToTop">
      <BackToTop :scroll-top-value="scrollTopValue" @update:scrollTopValue="scrollTopHandler" v-if="showBackToTop"></BackToTop>
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
import { nextTick } from "vue";
export default {
  name: "App",
  components: {
    NavigationBarTop,
    Cover,
    Article,
    SiteInformation,
    Footer,
    BackToTop,
  },
  data() {
    return {
      showNav: true,
      showBackToTop: false,
      scrollTopValue: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollTop);
  },
  methods: {
    scrollTop() {
      this.scrollTopValue = document.documentElement.scrollTop;
      this.showBackToTop = this.scrollTopValue >= 800;
    },
    scrollTopHandler(e) {
      this.scrollTopValue = e;
      if (this.scrollTopValue === 0) {
        const timer = setInterval(() => {
          document.documentElement.scrollTop = e;
          nextTick(() => {
            clearInterval(timer); //防止窗口抖动
          });
        }, 15);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-container {
  display: flex;
  flex-direction: column;
}
.cover {
  height: calc(100vh + 100px);
  width: 100%;
}
.main {
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
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
}
.blog-footer {
  text-align: center;
  height: 100px;
  position: relative;
  bottom: 0;
}
</style>
