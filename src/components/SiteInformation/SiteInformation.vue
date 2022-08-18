<template>
  <div class="information-container">
    <div class="card">
      <div class="picture">
        <img src="/src/assets/headPicture.png" alt="" />
      </div>
      <div class="name">
        <p>Ea</p>
      </div>
      <div class="jobTitle">
        <p>绵阳刘德华</p>
      </div>
      <div class="buttons">
        <div class="button1">
          <button>Button 1</button>
        </div>
        <div class="button2">
          <button>Button 2</button>
        </div>
      </div>
    </div>
    <el-card :body-style="{ padding: '0px' }" v-for="item in 2" :key="item" class="information-card">
      <!--      其它标签在此填充   -->
      <div style="padding: 14px">
        <span>站点信息</span>
        <div class="bottom">
          <time class="time">2022</time>
          <el-button text class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SiteInformation",
};
</script>
<script setup></script>

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
  .information-card {
    margin-top: 20px;
    border-radius: 10px;
  }
}
</style>
<!-- 第一个卡片  -->
<style lang="less" scoped>
.card {
  width: 298px;
  height: 394px;
  border-radius: 10px;
  background: #fff;
  //box-shadow: 1px 5px 60px 0 #4646466b;
  box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
  padding-top: 20px;
}

.card .picture,
.card .name,
.card .jobTitle,
.card .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .picture {
  border: 2px solid #4646466b;
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin: auto;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  > img {
    height: 100%;
    transform: scale(1.2, 1.2);
  }
}

.buttons > div {
  padding: 0.5em;
}

button {
  padding: 0.5em;
  outline: none;
  background: transparent;
  border: 1px solid #0f0f0f6b;
  border-radius: 0.4em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: all 0.3s;
  font-size: 0.7em;
}

.card .picture:hover,
button:hover {
  background: #252525;
  color: #f1f5f3;
}

.card .name p {
  margin-top: 8%;
  margin-bottom: 5%;
  font-size: 1em;
}

.card .jobtitle p {
  margin-bottom: 10%;
  font-size: 0.54em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}
</style>
