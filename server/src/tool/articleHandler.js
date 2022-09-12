const articlesModule = require('../model/my_articles')
const marked = require('marked')
const fs = require("fs");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});//基本设置

/**
 * 读取md文件内容
 * @param path
 * @author Ea
 */
function readeArticle(path) {
  if (!path) {
    throw new MyError(NOT_FOUND_ERROR_CODE);
  } else {
    return new Promise( (res,rej)=>{
      fs.readFile(`${path}`, "utf-8", (err, data) => {
        if (err) {
          rej(err)
        } else {
          res(data)
        }
      });
    })
  }
}


let pattern = /<h1(([\s\S])*?)<\/h1>/;
let articleValue = {
  title:'',
  content:'',
}
 function addArticle(path) {
  readeArticle(path).then(r=>{
    let res  =  marked.parse(r.toString())
    articleValue.content = res;
    // articleValue.title = pattern.exec(res)[0];
    try {
      articlesModule.create({title:articleValue.title,content:articleValue.content})
    }catch (e) {
      console.log(e);
    }
  }).catch(e=>{
    console.log(e)
  })

}
addArticle("../../docs/test.md");
function changeArticle() {}
