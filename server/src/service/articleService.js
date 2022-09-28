// 查询文章信息服务
const articlesModule = require("../model/my_articles");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

// 获取文章ID服务
async function queryArticles() {
  return await articlesModule.findAll({
    attributes: ["id", "fileName", "title"],
    raw: true,
    where: { isDelete: 0, status: 0 }
  });
}

module.exports = {
  queryArticles
};
