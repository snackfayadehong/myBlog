const { cloudsearch, song_url } = require("NeteaseCloudMusicApi");

/**
 *
 * @param keywords 关键词
 * @param limit  分页大小
 * @author fayadehong
 */
// 获取音乐
async function searchMusic(keywords, limit = 3) {
  if (!keywords) return [];
}
try {
  const result = await cloudsearch({
    keywords: "日落大道 梁博",
    type: 1,
    limit: 10
  });
  if (result.status !== 200) {
    return [];
  } else {
    return result.body.result.songs.id;
  }
} catch (error) {
  console.log(error);
}

//获取音乐url
async function getMusicUrl(id, br = 999000) {
  if (!id) return "";
  try {
    const musicUrl = await song_url({
      id,
      br
    });
    if (musicUrl.status !== 200) {
      return "";
    } else {
      return musicUrl.url;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  searchMusic,
  getMusicUrl
};

/*// 测试获取音乐
async function main() {
  try {
    const result = await cloudsearch({
      keywords: "日落大道 梁博",
      limit: 1,
      type: 1
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
main().then(r => {
  console.log(r.body.result.songs);
});*/

/*
// 测试获取音乐url
async function getMain(id, br = 640000) {
  if (!id) return "";
  try {
    const url = await song_url({
      id,
      br
    });
    if (url.status !== 200) {
      return "";
    } else {
      return url;
    }
  } catch (error) {
    console.log(error);
  }
}
getMain("36392029").then(r => {
  console.log(r.body.data);
});
*/
