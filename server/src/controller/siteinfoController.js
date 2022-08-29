const { siteInfoHandler } = require("../service/siteinformationService");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");
const { formatTime, timeStampToDays } = require("../tool/tools");

/**
 * 获取站点信息
 * @returns {Promise<*>}
 * @author Ea
 */
async function getSiteInfoApi() {
  const siteInfo = await siteInfoHandler();
  if (!siteInfo) {
    throw new MyError(NOT_FOUND_ERROR_CODE, "未找到信息");
  } else {
    siteInfo.createTime = formatTime(siteInfo.createTime); //格式化带T时间
    siteInfo.elapsedTime = timeStampToDays(formatTime(siteInfo.elapsedTime)); //转换为天数
    return siteInfo;
  }
}

module.exports = {
  getSiteInfoApi,
};
