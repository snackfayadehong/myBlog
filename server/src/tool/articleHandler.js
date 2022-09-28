const articlesModule = require("../model/my_articles");
const marked = require("marked");
const fs = require("fs");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

// marked基本设置
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

/**
 * 读取md文件内容
 * @param path
 * @author Ea
 */
function readeArticle(path) {
  if (!path) {
    throw new MyError(NOT_FOUND_ERROR_CODE);
  } else {
    return new Promise((res, rej) => {
      fs.readFile(`${path}`, "utf-8", (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  }
}

/**
 * 查询文章
 * @param name
 * @returns {Promise<void>}
 * @author Ea
 */
async function searchArticle(name) {
  return await articlesModule.findOne({
    attributes: ["id", "fileName"],
    raw: true,
    where: { fileName: name }
  });
}

let titlePattern = /<h1(([\s\S])*?)<\/h1>/; // 标题
let fileNamePattern = /(?!.*\/).+/; // 文件名称
let abstractPattern = /<p.*?>(.*?)<\/p>/;
let articleValue = {
  fileName: "",
  title: "",
  Abstract: "",
  content: ""
};

/**
 * add写入文件内容
 * @param path
 * @author Ea
 */
function addArticle(path) {
  // 读取文件内容并转换为HTMl
  readeArticle(path)
    .then(r => {
      let res = marked.parse(r.toString());
      // 拆解文章内容
      try {
        articleValue.content = res;
        articleValue.title = titlePattern.exec(res)[0];
        articleValue.fileName = fileNamePattern.exec(path)[0];
        if (abstractPattern.exec(res) == null) {
          articleValue.Abstract = "<p>无摘要</p>";
        } else {
          articleValue.Abstract = abstractPattern.exec(res)[0];
        }
      } catch (e) {
        console.log(e);
      }
      // 写入
      try {
        articlesModule
          .create({
            fileName: articleValue.fileName,
            title: articleValue.title,
            Abstract: articleValue.Abstract,
            content: articleValue.content
          })
          .then(r => {
            console.log(r, "处理成功");
          });
      } catch (e) {
        console.log(e);
      }
    })
    .catch(e => {
      console.log(e);
    });
}

/**
 * 修改文章信息
 * @param path
 * @returns {Promise<void>}
 * @author Ea
 */
async function changeArticle(path) {
  const fileName = await searchArticle(fileNamePattern.exec(path)[0]); // 查询修改前的文章ID
  if (fileName) {
    const res = marked.parse(await readeArticle(path)).toString(); // 转换修改后的文章内容为html
    articleValue.title = titlePattern.exec(res)[0];
    articleValue.content = res;
    // 修改文章信息
    const result = await articlesModule.update(
      { title: articleValue.title, content: articleValue.content },
      {
        where: {
          id: fileName.id
        }
      }
    );
    if (result[0] !== 1) {
      console.log("修改文章信息失败");
    }
  }
}

module.exports = {
  addArticle,
  changeArticle
};
