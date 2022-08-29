const db = require("../db");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

/**
 * 站点信息
 * @returns {Promise<null|*>}
 * @author Ea
 */
async function siteInfoHandler() {
  const res = await db
    .promise()
    .query("select * from SiteInformation where id = 1")
    .then(([rows]) => {
      return rows;
    })
    .catch((e) => {
      throw new MyError(NOT_FOUND_ERROR_CODE, e);
    });
  if (res.length < 1) {
    return null;
  } else {
    return res[0];
  }
}

module.exports = {
  siteInfoHandler,
};
