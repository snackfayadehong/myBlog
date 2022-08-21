/**
 * 接口路由
 * @author fayadehong
 */

const routes = [
  {
    path: "/test",
    handler: require("./service/getMusic").randomMusic()
  }
];

module.exports = routes;
