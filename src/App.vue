<template>
  <div class="ea-blog">
    <div class="left-container">
      <side-bar></side-bar>
    </div>
    <div class="main-container">
      <home></home>
    </div>
  </div>
</template>

<script>
import sideBar from "./components/SideBar/SideBar.vue";
import home from "./components/Home/Home.vue";
export default {
  name: "App",
  components: {
    sideBar,
    home
  }
};
</script>

<style scoped></style>
