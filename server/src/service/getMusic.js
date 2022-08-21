const { searchMusic, getMusicUrl } = require("../thirdParty/musicsApi");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE, REQUEST_PARAMS_ERROR_CODE } = require("../exception/errorCode");

// 获取音乐URl方法
let id = 0; //音乐id
/**
 *
 * @param event
 * @param req
 * @param res
 * @returns {Promise<{Status, author, name, url}>}
 */
async function randomMusic(event, req, res) {
  const { music } = event;
  if (!music) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE, "未提供音乐名");
  }
  const { songs: musicID } = await searchMusic(music); // 获取音乐ID
  if (musicID.length < 1) {
    throw new MyError(NOT_FOUND_ERROR_CODE);
  } else {
    id = musicID[0];
    const url = await getMusicUrl(id.id); //获取音乐地址
    return {
      status: url.code,
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
