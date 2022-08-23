import myAxios from "./myAxios.js";

export const getMusic = async () => {
  return await myAxios.post("/music/get", { music: "17岁" });
};
