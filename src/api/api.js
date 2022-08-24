import myAxios from "./myAxios.js";
import { sample } from "lodash";
//  音乐数组
const musicArray = ["日落大道 梁博", "Shots", "17岁 刘德华", "县城 刘森"];
const musicName = sample(musicArray);

export const getMusic = async () => {
  return await myAxios.post("/music/get", { music: musicName });
};
