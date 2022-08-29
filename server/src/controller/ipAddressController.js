const { searchIp, addIpAddress } = require("../service/addressService");

const addAddress = async ip => {
  const rows = await searchIp(ip);
  if (rows[0].length !== 0) return;
  const res = await addIpAddress(ip);
  console.log(res);
};
module.exports = {
  addAddress
};
