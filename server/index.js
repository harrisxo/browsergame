const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const app = express();

// PERSONAL IMPORTS
const validateRoute = require("./routes/validate");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const refetchRoute = require("./routes/refetch");
const attackRoute = require("./routes/attack");
const rankRoute = require("./routes/rank");
const testRoute = require("./routes/test");
const upHerosRoute = require("./routes/upheros");

// GENERAL MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static(path.resolve(__dirname, "../client/build")));

// DB CONNECTION
const db_connection = require("./config/db_connect.config");
db_connection();

// PERSONAL MIDDLEWARES
app.use("/", validateRoute);
app.use("/", loginRoute);
app.use("/", registerRoute);
app.use("/", refetchRoute);
app.use("/", attackRoute);
app.use("/", rankRoute);
app.use("/", testRoute);
app.use("/", upHerosRoute);

// DEV

// UNIVERSAL ROUTE
app.get("*", (req, res) => {
  res.send(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
