/**
 * 接口路由
 * @author Ea
 */

const routes = [
  {
    path: "/music/get",
    handler: require("./controller/musicController").randomMusicApi
  },
  {
    path: "/siteInformation",
    handler: require("./controller/siteinfoController").getSiteInfoApi
  },
  {
    path: "/add/accessToData",
    handler: require("./controller/addAccessController").addAccessToData
  },
  {
    path: "/add/address",
    handler: require("./controller/ipAddressController").addAddress
  },
  {
    path: "/articles",
    handler: require("./controller/articlesController").searchArticle
  }
];

module.exports = routes;
