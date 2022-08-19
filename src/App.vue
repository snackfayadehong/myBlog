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
        <transition name="nav-transition">
          <NavigationBarTop :scroll-top-value="scrollTopValue"></NavigationBarTop>
        </transition>
        <Article></Article>
        <site-information></site-information>
      </div>
    </div>
    <div class="blog-footer">
      <Footer></Footer>
    </div>
    <div class="goToTop" v-show="showBackToTop">
      <BackToTop :scroll-top-value="scrollTopValue" @update:scrollTopValue="scrollTopHandler" v-show="showBackToTop"></BackToTop>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
//组件
import NavigationBarTop from "./components/NavigationBarTop/NavigationBarTop.vue";
import Cover from "./components/Cover/Cover.vue";
import Article from "./components/Article/Article.vue";
import SiteInformation from "./components/SiteInformation/SiteInformation.vue";
import Footer from "./components/Footer/Footer.vue";
import BackToTop from "./components/BackToTop/BackToTop.vue";
import { ref, onMounted, onUnmounted } from "vue";

const showNav = ref(false); // 展示顶部导航栏
const showBackToTop = ref(false); // 展示回到顶部按钮
const scrollTopValue = ref(0); //  页面距离顶部距离

//mounted
const listener = onMounted(() => {
  window.addEventListener("scroll", scrollTop);
});

//unmounted
const removeListener = onUnmounted(() => {
  window.removeEventListener("scroll", scrollTop);
});

//methods
const scrollTop = () => {
  scrollTopValue.value = document.documentElement.scrollTop;
  showBackToTop.value = scrollTopValue.value >= 800;
};

// 回到顶部方法
const scrollTopHandler = (e) => {
  scrollTopValue.value = e;
  if (scrollTopValue.value === 0) {
    const timer = setInterval(() => {
      document.documentElement.scrollTop -= 50;
      if (document.documentElement.scrollTop === 0) {
        clearInterval(timer); //清除定时器
      }
    }, 5);
  }
};

// export default {
//   name: "App",
//   components: {
//     NavigationBarTop,
//     Cover,
//     Article,
//     SiteInformation,
//     Footer,
//     BackToTop,
//   },
//   data() {
//     return {
//       showNav: true,
//       showBackToTop: false,
//       scrollTopValue: 0,
//     };
//   },
//   mounted() {
//     window.addEventListener("scroll", this.scrollTop);
//   },
//   unmounted() {
//     window.removeEventListener("scroll", this.scrollTop);
//   },
//   methods: {
//     scrollTop() {
//       this.scrollTopValue = document.documentElement.scrollTop;
//       this.showBackToTop = this.scrollTopValue >= 800;
//     },
//     scrollTopHandler(e) {
//       this.scrollTopValue = e;
//       if (this.scrollTopValue === 0) {
//         const timer = setInterval(() => {
//           document.documentElement.scrollTop -= 50;
//           if (document.documentElement.scrollTop === 0) {
//             clearInterval(timer); //清除定时器
//           }
//         }, 5);
//       }
//     },
//   },
// };
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
// vue3 transition标签 渐入渐出样式
.nav-transition-enter-from,
.nav-transition-leave-to {
  opacity: 0;
}
.nav-transition-leave-from,
.nav-transition-enter-to {
  opacity: 1;
}
.nav-transition-enter-active,
.nav-transition-leave-active {
  transition: all 0.5s;
}
</style>
