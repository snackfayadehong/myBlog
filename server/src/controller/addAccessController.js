const { nowTraffic, increaseTraffic } = require("../service/browsingDataService");
const MyError = require("../exception");
const { SYSTEM_ERROR_CODE } = require("../exception/errorCode");

/**
 * 增加访问量
 * @returns {Promise<void>}
 * @author Ea
 */
async function addAccessToData() {
  const [nowCount] = await nowTraffic();
  if (!nowCount) {
    throw new MyError(SYSTEM_ERROR_CODE);
  } else {
    let count = nowCount[0].traffic;
    count++;
    return await increaseTraffic(count);
  }
}

module.exports = {
  addAccessToData,
};
