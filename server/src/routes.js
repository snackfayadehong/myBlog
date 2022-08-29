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
  {
    path: "/add/accessToData",
    handler: require("./controller/addAccessController").addAccessToData,
  },
];

module.exports = routes;
