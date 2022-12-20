const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUser } = require("../db/queries");

const loginControl = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({
      message: "All fields are required",
    });
  }

  const user = await findUser(username);
  if (!user) return res.status(404).json({ message: "User not registered" });

  bcrypt.compare(password, user.password, (err, match) => {
    if (err)
      return res.status(500).json({ message: "Oops, something went wrong" });

    if (!match) return res.status(403).json({ message: "Incorrect password" });

    user.password = "SECRET";

    let token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
      expiresIn: "1hr",
    });
    console.log(user);
    res.status(200).json({ user: user, token });
  });
};

module.exports = { loginControl };
