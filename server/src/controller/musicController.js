const { getSingleMusic, getSingleMusicUrl } = require("../service/musicService");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE, REQUEST_PARAMS_ERROR_CODE } = require("../exception/errorCode");

// 获取音乐URl方法
let id = 0; //音乐id

async function randomMusicApi(event) {
  const { music } = event;
  if (!music) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE, "未提供音乐名");
  }
  const res = await getSingleMusic(music); // 获取音乐ID
  if (!res) {
    throw new MyError(NOT_FOUND_ERROR_CODE);
  } else {
    id = res.id;
    const url = await getSingleMusicUrl(id); //获取音乐地址
    return {
      status: url.code,
      name: res.name,
      author: res.ar[0].name,
      musicPic: res.al.picUrl,
      url: url.url,
    };
  }
}

module.exports = {
  randomMusicApi,
};
// randomMusic().then(r => {
//   console.log(r);
// });
