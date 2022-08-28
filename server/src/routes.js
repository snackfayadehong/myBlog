/**
 * 接口路由
 * @author Ea
 */

const routes = [
  {
    path: "/music/get",
    handler: require("./service/getMusic").randomMusic
  },
  {
    path: "/siteInformation",
    handler: require("./service/getSiteInfo").siteInfoHandler
  }
];

module.exports = routes;
