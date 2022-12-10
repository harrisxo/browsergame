const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const app = express();

// PERSONAL IMPORTS

const testRoute = require("./routes/test");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

// GENERAL MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static(path.resolve(__dirname, "../client/build")));

// PERSONAL MIDDLEWARES
app.use("/", testRoute);
app.use("/", registerRoute);
app.use("/", loginRoute);

// DEV

// UNIVERSAL ROUTE
app.get("*", (req, res) => {
  res.send(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
