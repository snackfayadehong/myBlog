// 音乐服务
const { searchMusic, getMusicUrl } = require("../thirdParty/musicsApi");

/**
 * 获取音乐
 * @param keywords
 * @returns {Promise<null|*>}
 * @author Ea
 */
async function getSingleMusic(keywords) {
  const songs = await searchMusic(keywords, 1);
  if (songs.length < 1) {
    return null;
  } else {
    return songs[0];
  }
}

/**
 * 获取音乐播放地址
 * @param id
 * @returns {Promise<null|*>}
 * @author Ea
 */
async function getSingleMusicUrl(id) {
  const songsUrl = await getMusicUrl(id, 999000);
  if (songsUrl.length < 1) {
    return null;
  } else {
    return songsUrl[0];
  }
}

module.exports = {
  getSingleMusic,
  getSingleMusicUrl
};
