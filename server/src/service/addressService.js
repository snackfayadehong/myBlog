// 地址信息服务
const addressModule = require("../model/my_address");
const siteInfoModule = require("../model/my_siteinfo");
const MyError = require("../exception");
const { REQUEST_PARAMS_ERROR_CODE } = require("../exception/errorCode");

const values = {
  ip: ""
};

/**
 * 查询ip地址是否存在
 * @param ip
 * @returns {Promise<>}
 */
async function searchIp(ip) {
  if (!ip) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请求参数错误");
  } else {
    values.ip = ip;
    return await addressModule.findAll({
      attributes: ["id"], // 指定查询内容
      where: { ipAddress: ip }
    });
  }
}

/**
 * 写入ip地址
 * @param value
 * @returns {Promise<>}
 * @author Ea
 */
async function addIpAddress(value) {
  if (value) {
    return await addressModule.create({
      ipAddress: value
    });
  }
}

/**
 * 同步站点信息
 * @returns {Promise<>}
 * @author Ea
 */
async function upSyncSiteInfo() {
  const count = await addressModule.count();
  const siteInfo = await siteInfoModule.findAll({
    attributes: ["visitors"],
    where: { id: 1 }
  });
  let visitors = siteInfo[0].dataValues.visitors;
  if (count > visitors) {
    return await siteInfoModule.update(
      { visitors: count },
      {
        where: {
          id: 1
        }
      }
    );
  }
}

module.exports = {
  searchIp,
  addIpAddress,
  upSyncSiteInfo
};
