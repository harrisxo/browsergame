const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const app = express();

// PERSONAL IMPORTS
const testRoute = require("./routes/test");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const validateRoute = require("./routes/validate");
const rankRoute = require("./routes/rank");

// GENERAL MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static(path.resolve(__dirname, "../client/build")));

// DB CONNECTION
const db_connection = require("./config/db_connect.config");
db_connection();

// PERSONAL MIDDLEWARES
app.use("/", testRoute);
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", validateRoute);
app.use("/", rankRoute);

// DEV

// UNIVERSAL ROUTE
app.get("*", (req, res) => {
  res.send(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
