const { findAllUsers } = require("../db/queries");

const rankControl = async (req, res) => {
  const allUsers = await findAllUsers();
  if (!allUsers) {
    res.status(500).json({
      message: "Something went wrong, MongoDB error",
    });
    return;
  }
  const sortedUsers = allUsers
    .map((user) => {
      return {
        username: user.username,
        level: user.level,
      };
    })
    .sort((a, b) => a.level - b.level);
  res.status(200).json({
    data: sortedUsers,
  });
};

module.exports = { rankControl };
