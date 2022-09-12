const articlesModule = require('../model/my_articles')
const fs = require("fs");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

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


let pattern = /^(#).\S.*/;

 function addArticle(path) {
  readeArticle(path).then(r=>{
    let res =  r.toString();
    let title = pattern.exec(res);
    articlesModule.create()
  }).catch(e=>{
    console.log(e)
  })

}
addArticle("../../docs/test.md");
function changeArticle() {}
