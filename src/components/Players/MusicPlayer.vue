<template>
  <!--音乐播放器-->
  <div class="music-container" :class="{ 'music-active-switch': offsetThreshold }">
    <div class="music-disk">
      <!--唱片图片-->
      <img class="music-disk-picture" :src="music.musicPic" alt="" />
    </div>
    <audio ref="musicAudio" class="audio-component" controls preload="auto" @canplay="changeDuration">
      <el-icon ref="musicSource" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "MusicPlayer",
};
</script>
<script setup>
import { ref, onMounted } from "vue";
import { getMusic } from "../../api/api.js";

// 音乐信息
const music = ref({});
onMounted(async () => {
  const { data: res } = await getMusic();
  if (res.status !== 200) {
    console.log("请求音乐数据失败");
  } else {
    music.value = res;
  }
});
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.music-disk-picture {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /*设置图片不可点击*/
  pointer-events: none;
  transform: rotate(360edg);
  transform-origin: center;
  animation: musicPicRotating 5s linear infinite;
}

.music-disk-playing-style {
  animation: music-disk-rotate 5s linear infinite;
}

@keyframes music-disk-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.audio-component {
  width: 300px;
  height: 200px;
  top: 100px;
  display: none;
}

.music-active-switch {
  opacity: 1;
}
</style>
