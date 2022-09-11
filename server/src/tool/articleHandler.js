const articlesModule = require("../model/my_articles");
const fs = require("fs");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

/**
 * 读取md文件内容
 * @param path
 * @author Ea
 */
function readeArticle(path) {
  let a = "";
  if (!path) {
    throw new MyError(NOT_FOUND_ERROR_CODE);
  } else {
    fs.readFile(`${path}`, "utf-8", (err, data) => {
      if (err) {
        return "读取文件内容失败";
      } else {
        path(data);
      }
    });
  }
}

function addArticle(path) {
  const res = readeArticle(path);
  console.log(res);
}
addArticle("..\\..\\docs\\test.md");
function changeArticle() {}
