const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const http = require("http");

// 请求大小限制
const requestLimit = "5120kb";
class ExpressServer {
  constructor() {
    this.app = express();
    // 请求上下文路径
    this.contextPath = "/api";
    // 请求日志
    this.app.use(morgan("short"));
    this.app.use(bodyParser.urlencoded({ extended: false, limit: requestLimit }));
    this.app.use(bodyParser.json({ limit: requestLimit }));
    this.app.set("x-powered-by", false); //过滤此请求头
    this.app.all("*", (req, res, next) => {
      //  开启跨域
      this.app.use(cors());
      //  允许跨域请求的方法
      res.setHeader("Access-Control-Allow-Methods", "POST,GET, OPTIONS,DELETE,PUT");
      next();
    });
    //  设置Express的Session存储中间件,存储用户信息
    const sessionOptions = {
      secret: "fayadehong", //  签名密钥
      name: "session_id", //  返回客户端Key的名称, 默认connect_id
      resave: false, // 强制保存session即使它没有变化,默认为true,建议false
      saveUninitialized: true, // 如果没有session那么就设置，否则不设置(推荐true)
      rolling: true, // 每次请求更新有效时长
      cookie: {
        //  全局cookie
        maxAge: 5000, //过期时间,秒为单位
        httpOnly: true // 是否允许客户端修改 cookie（默认 true 不能被修改）
      }
    };
    this.app.use(expressSession(sessionOptions));
    this.server = http.createServer(this.app);
  }

  setRoute(path, handlerFunction) {
    const handler = async (req, res) => {
      //  IP过滤
      const requestRealIp = getRealIp(req);
    };
  }

  //  监听
  listen(port) {
    this.server.listen(port);
    let url = `http://127.0.0.1:${port}`;
    if (this.contextPath) {
      url += this.contextPath;
    }
    console.log(`server is running at ${url}`);
  }
}

//  获取用户真实ip

const getRealIp = req => {
  if (!req) return "";
  return (
    req.headers["x-forwarded-for"] || //一个透明的代理服务器在把用户的请求转到下一环节的服务器时，会在HTTP的头中加入一条X-Forwarded-For记录，用来记录用户的真实IP，其形式为X-Forwarded-For:用户IP
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress ||
    req.ip
  );
};

module.exports.myBlogServer = ExpressServer;
