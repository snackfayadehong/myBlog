const { myBlogServer } = require("./server");
const routes = require("./routes");
// 创建server服务实例
const server = new myBlogServer();

// 注册路由接口
for (const route of routes) {
  server.setRoute(route.path, route.handler);
}

server.listen(3007);
