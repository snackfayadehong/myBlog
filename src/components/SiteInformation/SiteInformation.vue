<template>
  <div class="information-container">
    <!--    个人信息卡片区域   -->
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
          <button>
            <img src="/src/assets/email.png" alt="" />
          </button>
        </div>
        <div class="button2">
          <button>
            <img src="/src/assets/github.png" alt="github" title="github" />
          </button>
        </div>
      </div>
    </div>
    <!--    站点信息卡片区域   -->
    <el-card :body-style="{ padding: '0px' }" class="information-card">
      <!--      其它标签在此填充   -->
      <div style="padding: 14px">
        <span class="el-card-span">
          <el-icon><LocationInformation /></el-icon>
          <span>站点信息</span>
        </span>
        <div class="title">
          <div class="Access">
            <span>访客数:</span>
            <span>{{ siteInfo.traffic }}&nbsp;人</span>
          </div>
          <div class="traffic">
            <span>访问量:</span>
            <span>{{ siteInfo.visitors }}&nbsp;次</span>
          </div>
          <div class="runtime">
            <span>运行时间:</span>
            <span>{{ siteInfo.elapsedTime }}&nbsp;天</span>
          </div>
        </div>
        <div class="bottom">
          <time class="time">{{ time }}</time>
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
<script setup>
import { LocationInformation } from "@element-plus/icons";
import dayjs from "dayjs";
import { getSiteInfo } from "../../api/api.js";
import { ref, onMounted } from "vue";

//当前时间
const time = ref(null);

const siteInfo = ref({});
onMounted(async () => {
  const { data: res } = await getSiteInfo();
  if (!res) {
    console.log("请求站点信息失败");
  } else {
    siteInfo.value = res[0];
  }
});
const nowTime = onMounted(() => {
  setInterval(function () {
    time.value = dayjs(`${new Date()}`).format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
});
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
  .information-card {
    margin-top: 20px;
    border-radius: 10px;
  }
}
.el-card-span {
  display: flex;
  align-items: center;
  > span {
    padding-left: 5px;
  }
}
.title {
  margin-top: 20px;
  font-size: 12px;
  > div {
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
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
    transition: all 0.7s;
  }
  > img:hover {
    transition: all 0.7s;
    transform: scale(1.8, 1.8);
  }
}

.buttons > div {
  padding: 1em;
}

.card button {
  width: 3em;
  height: 3em;
  outline: none;
  border: none;
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  transition: all 0.3s;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 70%;
    height: 70%;
  }
}
//.card button img:hover {
//  transition: all 0.5s;
//  transform: scale(1.2, 1.2);
//}
.card button::before {
  content: "";
  width: 0;
  height: 3em;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}
.card button:hover::before {
  width: 3em;
}

.card .picture:hover {
  background: #252525;
  color: #f1f5f3;
}

.card .name p {
  margin-top: 8%;
  margin-bottom: 5%;
  font-size: 1em;
}

.card .jobTitle p {
  margin-bottom: 10%;
  font-size: 0.54em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}
</style>
