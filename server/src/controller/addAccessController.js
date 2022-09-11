const { nowTraffic, increaseTraffic } = require("../service/browsingDataService");
const MyError = require("../exception");
const { SYSTEM_ERROR_CODE } = require("../exception/errorCode");

/**
 * 增加访问量
 * @returns {Promise<void>}
 * @author Ea
 */
async function addAccessToData() {
  const [
    {
      dataValues: { traffic }
    }
  ] = await nowTraffic();
  if (!traffic) {
    throw new MyError(SYSTEM_ERROR_CODE);
  } else {
    let count = traffic;
    count++;
    try {
      return await increaseTraffic(count);
    } catch (e) {
      throw new MyError(SYSTEM_ERROR_CODE, e);
    }
  }
}

module.exports = {
  addAccessToData
};
