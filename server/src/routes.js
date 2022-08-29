/**
 * 接口路由
 * @author Ea
 */

const routes = [
  {
    path: "/music/get",
    handler: require("./controller/musicController").randomMusicApi,
  },
  {
    path: "/siteInformation",
    handler: require("./controller/siteinfoController").getSiteInfoApi,
  },
];

module.exports = routes;
