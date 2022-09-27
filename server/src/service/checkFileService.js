const chokidar = require("chokidar");
const { addArticle, changeArticle } = require("../tool/articleHandler");

//启用文件夹监听并配置监听器
const watcher = chokidar.watch("./docs", {
  ignoreInitial: true, //初始化时不触发add/addDir事件
  useFsEvents: true // 使用fsEvent接口
});

const pattern = /.md/; //正则匹配.md

//文件类型校验
function patternTest(path) {
  return pattern.test(path);
}

//事件处理
/*watcher.on("all", (event, path) => {
  if (patternTest(path)) {
    watcherHandler(event, path);
  }
});*/

/**
 *
 * @param e  // 事件
 * @param file //文件路径
 */
function watcherHandler(e, file) {
  switch (e) {
    case "change":
      try {
        changeArticle(file);
      } catch (e) {
        console.log(e);
      }
      break;
    case "add":
      try {
        addArticle(file);
      } catch (e) {
        console.log(e);
      }
      break;
  }
}
module.exports = {
  patternTest,
  watcherHandler,
  watcher
};
