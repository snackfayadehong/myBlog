const mysql = require("mysql2");
const { dbConfig } = require("./config/config");

/**
 * 数据库连接池
 * @type {Pool} 连接池
 * @author Ea
 */
const db = mysql.createPool({
  host: dbConfig.host,
  port: dbConfig.port,
  database: dbConfig.database,
  user: dbConfig.username,
  password: dbConfig.password
});

// 测试连接
/*db.promise()
  .query("select 1 ")
  .then(([rows, fields]) => {
    console.log("Mysql client connected");
  })
  .catch(err => {
    console.error("Unable connect to Mysql", err);
  })
  .then(() => db.end());*/

module.exports = db;
