const Sequelize = require("sequelize");

const sequelize = new Sequelize("expenses", "root", "localhost", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
