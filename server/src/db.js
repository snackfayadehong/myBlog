const { Sequelize } = require("sequelize");
const { dbConfig } = require("./config/config");

/**
 * 数据库实例
 * @type {Sequelize}
 * @author Ea
 */
const sequelize = new Sequelize({
  dialect: "mysql",
  logging: console.log,
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
  port: dbConfig.port,
  host: dbConfig.host,
  timezone: "+8:00" //东八时区
});

//测试连接
// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL client connected");
  })
  .catch(e => {
    console.error("Unable to connect to MySQL", e);
  });

module.exports = sequelize;
