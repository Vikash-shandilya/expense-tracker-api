const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const sequelize = require("./data/database");
const Sequelize = require("sequelize");

const expenserouter = require("./router/expenserouter");

const app = express();
app.use(cors());

app.use(bodyparser.json());

app.use(expenserouter);

sequelize
  .sync()
  .then((result) => {
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
