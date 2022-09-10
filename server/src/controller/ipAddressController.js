const { getRealIp } = require("../tool/realIp");
const { searchIp, addIpAddress, upSyncSiteInfo } = require("../service/addressService");

/**
 * 写入ip地址信息方法
 * @param event body内容
 * @param req   请求信息
 * @returns {Promise<void>}
 * @author Ea
 */
const addAddress = async (event, req) => {
  const ip = getRealIp(req); //获取请求头信息的ip地址
  const row = await searchIp(ip); // 判断是否在数据库中存在
  // if (row[0].length !== 0) {
  //   console.log("ip地址已存在--", ip);
  // } else if (row[0].length === 0) {
  //   const res = await addIpAddress(ip); // 不存在写入
  //   if (res[0].affectedRows !== 1) {
  //     console.log("写入失败--", ip);
  //   } else {
  //     console.log("写入成功--", ip);
  //     const res = await upSyncSiteInfo();
  //     if (res[0].affectedRows === 0) {
  //       console.log("同步站点信息失败,up_sync_siteInfo");
  //     } else {
  //       console.log("同步站点信息成功,up_sync_siteInfo");
  //     }
  //   }
  // }
  if (row.length !== 0) {
    return console.log("ip地址已存在--", ip);
  }
  const res = await addIpAddress(ip); //不存在
  switch (res.uniqno) {
    case 0:
      console.log("写入失败--", ip);
      break;
    case 1:
      console.log("写入成功--", ip);
      const res = await upSyncSiteInfo();
      console.log(res.length > 0 ? "同步站点信息成功" : "同步站点信息失败");
      break;
  }
};

module.exports = {
  addAddress
};
