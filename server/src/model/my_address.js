const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

/**
 * 地址信息表模型
 * @type {ModelCtor<>}
 * @author Ea
 */
const addressModule = sequelize.define(
  "my_address",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement: true,
      primaryKey: true
    },
    ipAddress: {
      type: DataTypes.CHAR
    },
    createTime: {
      type: DataTypes.DATE
    }
  },
  {
    tableName: "my_address",
    createdAt: "createTime",
    timestamps: false
  }
);

module.exports = addressModule;
