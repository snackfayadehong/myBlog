const db = require("../db");
const MyError = require("../exception");
const { REQUEST_PARAMS_ERROR_CODE, SYSTEM_ERROR_CODE } = require("../exception/errorCode");

/**
 * 查询截止当前访问量
 * @returns {Promise<void>}
 */
async function nowTraffic() {
  return db
    .promise()
    .query("select traffic from SiteInformation where id = 1")
    .catch(e => {
      throw new MyError(SYSTEM_ERROR_CODE, e);
    });
}

/**
 *
 * @param count
 * @returns {Promise<void>}
 */
async function increaseTraffic(count) {
  const nowCount = await nowTraffic();
  if (!count || count === nowCount) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请求参数错误");
  } else {
    return db
      .promise()
      .query(`update Siteinformation set traffic = ${count}`)
      .catch(e => {
        throw new MyError(SYSTEM_ERROR_CODE, e);
      });
  }
}

module.exports = {
  nowTraffic,
  increaseTraffic
};
