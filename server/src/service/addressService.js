const db = require("../db");
const MyError = require("../exception");
const { SYSTEM_ERROR_CODE, REQUEST_PARAMS_ERROR_CODE } = require("../exception/errorCode");
/**
 * 查询ip地址是否存在
 * @param ip
 * @returns {Promise<>}
 * @author Ea
 */
async function searchIp(ip) {
  if (!ip) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请求参数错误");
  } else {
    return db
      .promise()
      .query(`select ipAddress from addressinformation where ipAddress = '${ip}'`)
      .catch(e => {
        throw new MyError(SYSTEM_ERROR_CODE, e);
      });
  }
}

/**
 * 写入ip地址
 * @param address
 * @returns {Promise<void>}
 * @author Ea
 */
async function addIpAddress(address) {
  console.log(address);
  if (address) {
    db.promise()
      .query(`INSERT INTO  addressinformation (ipAddress) VALUES ('${address}')`)
      .then(([rows]) => {
        console.log(rows);
      })
      .catch(e => {
        throw new MyError(SYSTEM_ERROR_CODE, e);
      });
  }
}

module.exports = {
  searchIp,
  addIpAddress
};
