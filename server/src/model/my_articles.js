const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

/**
 * 文章信息表模型
 * @type {ModelCtor<>}
 * @author Ea
 */
const articlesModule = sequelize.define(
  "my_articles",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.CHAR
    },
    content: {
      type: DataTypes.TEXT
    },
    author: {
      type: DataTypes.CHAR
    },
    createTime: {
      type: DataTypes.DATE
    },
    updateTime: {
      type: DataTypes.DATE
    },
    isDelete: {
      type: DataTypes.TINYINT,
      default: 0
    },
    status: {
      type: DataTypes.TINYINT,
      default: 0
    }
  },
  {
    tableName: "my_articles",
    createdAt: "createTime",
    updatedAt: "updateTime",
    timestamps: false
  }
);

module.exports = articlesModule;
