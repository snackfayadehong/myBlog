// 站点浏览信息服务
const siteInfoModule = require("../model/my_siteinfo");
const MyError = require("../exception");
const { REQUEST_PARAMS_ERROR_CODE, SYSTEM_ERROR_CODE } = require("../exception/errorCode");

const id = 1;

/**
 * 查询截止当前访问量
 * @returns {Promise<>}
 * @author Ea
 */
async function nowTraffic() {
  return await siteInfoModule.findAll({
    attributes: ["traffic"],
    where: {
      id: id
    }
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
    try {
      await siteInfoModule.update(
        { traffic: count },
        {
          where: {
            id: id
          }
        }
      );
    } catch (e) {
      throw new MyError(SYSTEM_ERROR_CODE, e);
    }
  }
}

module.exports = {
  nowTraffic,
  increaseTraffic
};
