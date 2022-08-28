const MyError = require("../exception");
const { REQUEST_PARAMS_ERROR_CODE } = require("../exception/errorCode");
const { floor } = require("lodash");

/**
 * 运行时间处理
 * @param time
 * @returns {number}
 * @author Ea
 */
const nowTimeStamp = new Date().getTime();
function formatTime(time) {
  if (!time) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE, "elapsedTime不能为空");
  } else {
    // 处理带T时间
    return new Date(+new Date(time) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, " ")
      .replace(/\.[\d]{3}Z/, "");
  }
}
function timeStampToDays(times) {
  //  转换时间戳处理为天数
  const timeStamp = new Date(times).getTime();
  return floor((nowTimeStamp - timeStamp) / (1000 * 3600 * 24));
}

module.exports = {
  formatTime,
  timeStampToDays
};
