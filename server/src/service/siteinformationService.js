const siteInfoModule = require("../model/my_siteinfo");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

/**
 * 站点信息
 * @returns {Promise<null|*>}
 * @author Ea
 */
async function siteInfoHandler() {
  const [{ dataValues }] = await siteInfoModule.findAll({ where: { id: 1 } }).catch(e => {
    throw new MyError(NOT_FOUND_ERROR_CODE, e);
  });
  if (!dataValues) {
    return null;
  } else {
    return dataValues;
  }
}

module.exports = {
  siteInfoHandler
};
