// 获取文章信息控制器
const { queryArticles } = require("../service/articleService");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

async function searchArticle() {
  const res = await queryArticles();
  if (!res) {
    return NOT_FOUND_ERROR_CODE;
  } else {
    return res;
  }
}

module.exports = {
  searchArticle
};
