<template>
    <button type="button" id="backTop" class="toTop-arrow" style="z-index: 100;" v-if="showBackTop" ></button>
</template>

<script>

export default {
  name: "BackToTop",
  data(){
    return{
      showBackTop:false
    }
  },
  mounted() {
    window.addEventListener('scroll',this.showBackTop())
  },
  methods:{
    showBackTop(){
      let that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop
      console.log(scrollTop)
      scrollTop > 200 ? this.showBackTop = true : this.showBackTop = false
    }
  }
}

</script>

<style scoped>
/* 按钮边框的大小、位置、样式 */
.toTop-arrow {
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 33%;
  opacity: 0.7;
  background: black;
  cursor: pointer;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  /*display: none;*/
}

/* 绘制按钮中的向上箭头 */
.toTop-arrow::before, .toTop-arrow::after {
  width: 31px;
  height: 7px;
  border-radius: 3px;
  background: orange;
  position: absolute;
  content: "";
}

.toTop-arrow::before {
  transform: rotate(-45deg) translate(0, -50%);
  left: 0.4rem;
}

.toTop-arrow::after {
  transform: rotate(45deg) translate(0, -50%);
  right: 0.4rem;
}

/* 取消点击按钮时的聚焦 */
.toTop-arrow:focus {
  outline: none;
}

/*作者：杜赛_dusai*/
/*链接：https://juejin.cn/post/6844903817083879438*/
/*来源：稀土掘金*/
/*著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/
</style>