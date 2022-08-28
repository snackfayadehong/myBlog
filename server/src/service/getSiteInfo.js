const db = require("../db");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");
const { formatTime, timeStampToDays } = require("../tool/tools");
/**
 * formatTime YYYYMMDDThhmmssZ 时间格式处理
 * timeStampToDays 转换时间戳并处理为天数
 * @returns {Promise<RowDataPacket[][]|RowDataPacket[]|OkPacket|OkPacket[]|ResultSetHeader>}
 * @author Ea
 */
async function siteInfoHandler() {
  return await db
    .promise()
    .query("select * from SiteInformation where id = 1")
    .then(([rows]) => {
      rows[0].createTime = formatTime(rows[0].createTime);
      rows[0].elapsedTime = timeStampToDays(formatTime(rows[0].elapsedTime));
      return rows;
    })
    .catch(e => {
      throw new MyError(NOT_FOUND_ERROR_CODE, e);
    });
}

module.exports = {
  siteInfoHandler
};
