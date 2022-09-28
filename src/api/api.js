import myAxios from "./myAxios.js";
import { sample } from "lodash";
//  音乐数组
const musicArray = ["日落大道 梁博", "Shots", "17岁 刘德华", "县城 刘森"];
const musicName = sample(musicArray);

/**
 * 获取音乐信息
 * @returns {Promise<AxiosResponse<any>>}
 * @author Ea
 */
export const getMusic = async () => {
  return await myAxios.post("/music/get", { music: musicName });
};

/**
 * 获取个人站点信息
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getSiteInfo = async () => {
  return await myAxios.post("/siteInformation");
};

export const getArticles = async () => {
  return await myAxios.post("/articles");
};

/**
 * 增加访问量
 * @returns {Promise<AxiosResponse<any>>}
 */
export const addAccessData = async () => {
  return await myAxios.post("/add/accessToData");
};

/**
 * 写入ip地址
 * @returns {Promise<AxiosResponse<any>>}
 */
export const addAddress = async () => {
  return await myAxios.post("/add/address");
};
