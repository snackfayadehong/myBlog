const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

const siteInfoModule = sequelize.define(
  "my_siteinfo",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement: true,
      primaryKey: true
    },
    visitors: {
      type: DataTypes.SMALLINT,
      default: 0
    },
    traffic: {
      type: DataTypes.SMALLINT,
      default: 0
    },
    elapsedTime: {
      type: DataTypes.DATE
    },
    createTime: {
      type: DataTypes.DATE
    },
    updateTime: {
      type: DataTypes.DATE
    }
  },
  {
    tableName: "my_siteinfo",
    createdAt: "createTime",
    updatedAt: "updateTime",
    timestamps: false
  }
);

module.exports = siteInfoModule;
