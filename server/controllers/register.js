const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models");
const { findUser } = require("../db/queries");

const registerControl = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(422).json({
      message: "All fields are required",
    });
  } else if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long",
    });
  }

  const user = await findUser(username);
  if (user)
    return res
      .status(409)
      .json({ message: "Username or email already registered" });

  const hash = bcrypt.hashSync(password, 12);

  const newUser = new User({
    username,
    email,
    password: hash,
  });

  await newUser.save((err, doc) => {
    if (err)
      return res.status(500).json({ message: "Oops, something went wrong" });

    doc.password = "SECRET";

    let token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
      expiresIn: "1hr",
    });

    res.status(200).json({ user: doc, token });
  });
};

module.exports = { registerControl };
