<template>
  <div class="information-container">

        <el-card :body-style="{ padding: '0px' }" v-for="item in 3" :key="item" class="information-card">
          <img alt=""
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
  </div>
</template>

<script>
export default {
  name: "SiteInformation"
};
</script>

<style lang="less" scoped>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.information-container {
  margin-left: -30px;
  .information-card {
    margin-bottom: 20px;
    border-radius: 10px;
  }
}
</style>