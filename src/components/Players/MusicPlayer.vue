<template>
  <!--音乐播放器-->
  <div class="music-container" :class="{ 'music-active-switch': offsetThreshold }">
    <div class="music-disk">
      <!--唱片图片-->
      <img class="music-disk-picture" src="" alt="" />
    </div>

    <!--进度条-->
    <div class="music-slider">
      <el-slider size="small" />
    </div>

    <!--按钮组-->
    <div class="button-group">
      <!--上一曲 按钮-->
      <button class="play-button">
        <icon-go-start theme="outline" size="23" fill="#939393" :strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" />
      </button>
      <!--播放 按钮-->
      <button class="play-button">
        <icon-play-one theme="outline" size="23" fill="#939393" :strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" />
        <icon-pause theme="outline" size="23" fill="#939393" :strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" />
      </button>
      <!--下一曲 按钮-->
      <button class="play-button">
        <icon-go-end theme="outline" size="23" fill="#939393" :strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" />
      </button>
      <!--音量按钮-->
      <div class="voice-container">
        <button class="voice-button">
          <icon-volume-notice theme="outline" size="23" fill="#939393" :strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" />
          <icon-volume-mute theme="outline" size="23" fill="#939393" :strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" />
        </button>
        <div class="voice-slider">
          <el-slider :max="1" :step="0.1" size="small" />
        </div>
      </div>
    </div>

    <audio ref="musicAudio" class="audio-component" controls preload="auto" @canplay="changeDuration">
      <source ref="musicSource" type="audio/mpeg" />
    </audio>
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

onMounted(() => {
  getMusic();
});
</script>

<style lang="less" scoped>
.music-container {
  position: fixed;
  justify-content: center;
  width: 280px;
  height: 110px;
  background-color: white;
  border-radius: 15px;
  bottom: 15px;
  left: 10px;
  opacity: 1;
  transition: 0.5s;
}

.music-disk {
  position: absolute;
  width: 90px;
  height: 90px;
  left: 15px;
  top: 10px;
  border-radius: 50%;
}

.music-disk-picture {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  /*设置图片不可点击*/
  pointer-events: none;
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

.button-group {
  position: absolute;
  width: 330px;
  height: 38px;
  left: 90px;
  bottom: 13px;
  margin-left: 10px;
}

.button-group > button {
  margin-left: 10px;
}

.play-button {
  float: left;
  width: 31px;
  height: 31px;
  padding: 4px;
  /*margin: 0px;*/
  border: 0px;
  border-radius: 50%;
  margin: 7px 0px 0px 0px;
}

.voice-button {
  float: left;
  width: 31px;
  height: 31px;
  padding: 0px;
  /*margin: 0px;*/
  border: 0px;
  border-radius: 50%;
  margin: 7px 0px 0px 0px;
  background-color: transparent;
}

.music-slider {
  position: absolute;
  top: 20px;
  left: 120px;
  width: 50%;
}

.voice-container {
  float: left;
  margin-left: 12px;
  width: 31px;
  height: 38px;
  overflow: hidden !important;
  transition: 0.5s;
}

.voice-container:hover {
  width: 160px;
}

.voice-slider {
  position: relative;
  top: 2px;
  right: -30px;
  width: 90px;
  height: 35px;
  background-color: white;
  border-radius: 10px;
  padding: 0px 15px 0px 15px;
  transition: 0.2s;
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
