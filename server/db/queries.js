const { User } = require("../models/models");

const findUser = async (username) => {
  let user = await User.findOne({ username: username })
    .then((userFound) => {
      if (!userFound) {
        return null;
      }
      return userFound;
    })
    .catch((err) => {
      return "something went wrong";
    });

  return user;
};

module.exports = { findUser };
