const Sequelize = require("sequelize");

const User = DB.define("user", {
  // freezeTableName: true,
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: Sequelize.INTEGER,
});

module.exports = User;
