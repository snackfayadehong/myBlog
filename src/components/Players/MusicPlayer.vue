<template>
  <!--音乐播放器-->
  <div class="music-container" @click="suspendMusic">
    <div class="music-disk">
      <!--唱片图片-->
      <img class="music-disk-picture" src="src/assets/musicPic.png" alt="" v-if="defaultPic" />
      <img class="music-disk-picture" :src="music.musicPic" alt="" v-else />
    </div>
    <audio :src="music.url" class="audio-component" ref="musicAudio"></audio>
  </div>
</template>

<script>
export default {
  name: "MusicPlayer"
};
</script>
<script setup>
import { ref, onMounted } from "vue";
import { getMusic } from "../../api/api.js";

const defaultPic = ref(true);
const musicAudio = ref(null);

// mounted
const lister = onMounted(() => {
  window.addEventListener("click", videoPlayer);
});

// 音乐信息
const music = ref({});
onMounted(async () => {
  const { data: res } = await getMusic();
  if (res.status !== 200) {
    console.log("请求音乐数据失败");
  } else {
    defaultPic.value = false;
    music.value = res;
  }
});
// 播放音乐方法
const videoPlayer = () => {
  if (musicAudio.value.paused === true) {
    musicAudio.value.play();
  } else {
    window.removeEventListener("click", videoPlayer);
  }
};
const suspendMusic = () => {
  if (musicAudio.value.paused === true) return;
  musicAudio.value.pause();
};
</script>

<style lang="less" scoped>
@keyframes musicPicRotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.music-container {
  position: fixed;
  justify-content: center;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  bottom: 15px;
  left: 10px;
  opacity: 1;
  transition: 0.5s;
}

.music-disk {
  position: absolute;
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}
// 暂停样式
.music-disk:hover::after {
  content: "";
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  background-image: url("/src/assets/suspend.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  background-color: rgba(89, 89, 89, 0.05);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 0 solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(14, 14, 14, 0.19) 0 6px 15px 0;
  -webkit-box-shadow: rgba(14, 14, 14, 0.19) 0 6px 15px 0;
  -webkit-border-radius: 50%;
  color: rgba(128, 128, 128, 0.8);
  //  开启点击事件
  pointer-events: auto;
}

.music-disk-picture {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  /*设置图片不可点击*/
  pointer-events: none;
  transform: rotate(360edg);
  transform-origin: center;
  animation: musicPicRotating 5s linear infinite;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

@keyframes music-disk-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
