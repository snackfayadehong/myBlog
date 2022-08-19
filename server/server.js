const express = require("express");

class ExpressServer {
  constructor() {
    this.app = express();
    // 请求上下文路径
    this.contextPath = "/api";

    this.app.use();
  }
}
