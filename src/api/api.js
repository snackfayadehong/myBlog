import myAxios from "./myAxios.js";
import { sample } from "lodash";
//  音乐数组
const musicArray = ["日落大道 梁博", "Shots", "17岁 刘德华", "县城 刘森"];
const musicName = sample(musicArray);

/**
 *
 * @returns {Promise<AxiosResponse<any>>}
 * @author Ea
 */
//获取音乐
export const getMusic = async () => {
  return await myAxios.post("/music/get", { music: musicName });
};

/**
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getSiteInfo = async () => {
  return await myAxios.post("/siteInformation");
};
