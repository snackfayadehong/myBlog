const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const http = require("http");
const MyError = require("./exception");
const { BAN_ERROR_CODE } = require("./exception/errorCode");
const { getRealIp } = require("./tool/realIp");
const { addAddress } = require("./controller/ipAddressController");

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
    this.app.use(cors()); //允许跨域
    this.app.all("/music", (req, res, next) => {
      //  允许跨域请求的方法
      res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,DELETE,PUT");
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
      if (!requestRealIp) {
        return BAN_ERROR_CODE;
      } else {
        await addAddress(requestRealIp);
      }
      const event = req.body;
      let result;
      try {
        const startTime = new Date().getTime();
        let params;
        if (event.file) {
          let eventCopy = { ...event };
          eventCopy.file = undefined;
          params = JSON.stringify(eventCopy);
        } else {
          params = JSON.stringify(event);
        }
        console.log(`req start path = ${req.path}, clientIp = ${requestRealIp}, params = ${params}`);
        result = await handlerFunction(event, req, res);
        //  响应封装
        result = {
          code: 0,
          data: result
        };
        console.log(`req end path = ${req.path}, clientIp = ${requestRealIp}, params = ${params}, costTime = ${new Date().getTime() - startTime}`);
      } catch (e) {
        //  全局异常处理
        if (e instanceof MyError) {
          result = {
            code: e.code,
            message: e.message,
            data: null
          };
        } else {
          result = {
            code: 500,
            data: null,
            message: "server error"
          };
        }
        console.error(`req error path = ${req.path}, clientIp = ${requestRealIp}, params = ${JSON.stringify(event)}`, e);
      }
      res.send(result);
    };
    this.app.post(this.contextPath + path, handler);
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

module.exports.myBlogServer = ExpressServer;
