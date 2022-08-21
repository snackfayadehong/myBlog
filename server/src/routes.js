/**
 * 接口路由
 * @author fayadehong
 */

const routes = [
  {
    path: "/music/get",
    handler: require("./service/getMusic").randomMusic
  }
];

module.exports = routes;
