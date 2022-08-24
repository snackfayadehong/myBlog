import axios from "axios";

// 自定义axios实例
const myAxios = axios.create({
  // 环境切换
  // baseURL: process.env.NODE.ENV === "production" ? "http://127.0.0.1:3007/api" : "https://",
  baseURL: "http://127.0.0.1:3007/api",
  headers: { token: localStorage.getItem("token") || "" },
  timeout: 5000,
  withCredentialsL: false, //跨域请求需要凭证
});

myAxios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
myAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截器
myAxios.interceptors.response.use(
  (res) => {
    if (res.data.code !== 0) {
      return "请求数据失败";
    }
    return res.data;
  },
  (err) => {
    if (err) {
      return Promise.reject(err);
    }
  }
);

export default myAxios;
