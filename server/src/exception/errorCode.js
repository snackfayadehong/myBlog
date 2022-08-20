/**
 *
 * 错误代码
 *  @type {number}
 */

// 请求参数错误
const REQUEST_PARAMS_ERROR_CODE = 40000;

// 无权访问
const NO_AUTH_ERROR_CODE = 40100;

// 禁止访问
const BAN_ERROR_CODE = 40300;

// 找不到数据
const NOT_FOUND_ERROR_CODE = 40400;

// 系统错误
const SYSTEM_ERROR_CODE = 50000;

// 第三方错误
const THIRD_PART_SERVER_ERROR_CODE = 50100;

module.exports = {
  REQUEST_PARAMS_ERROR_CODE,
  NO_AUTH_ERROR_CODE,
  BAN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  SYSTEM_ERROR_CODE,
  THIRD_PART_SERVER_ERROR_CODE
};
