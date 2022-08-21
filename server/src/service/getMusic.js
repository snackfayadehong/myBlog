const { searchMusic, getMusicUrl } = require("../thirdParty/musicsApi");
const { sample } = require("lodash");

/**
 *
 * @type {string[]}
 * @author fayadehong
 */

// 获取音乐URl方法
const musics = ["日落大道 梁博", "shots", "17岁 刘德华", "县城 刘森"]; // 音乐数组
let id = 0; //音乐id
async function randomMusic() {
  let music = sample(musics); // 随机返回一个数组元素
  const { songs: musicID } = await searchMusic(music); // 获取音乐ID
  if (musicID.length < 1) {
    return null;
  } else {
    id = musicID[0];
    const url = await getMusicUrl(id.id); //获取音乐地址
    return {
      Status: url.code,
      name: id.name,
      author: id.ar[0].name,
      url: url.url
    };
  }
}

module.exports = {
  randomMusic
};
// randomMusic().then(r => {
//   console.log(r);
// });
