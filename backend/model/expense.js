const sequelize = require("../data/database");
const Sequelize = require("sequelize");

const expenses = sequelize.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.ENUM("movie", "sutta", "oldmonk"),
  },
});

module.exports = expenses;
