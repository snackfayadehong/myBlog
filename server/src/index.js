const { myBlogServer } = require("./server");

// 创建server服务实例
const server = new myBlogServer();

server.listen(3007);
