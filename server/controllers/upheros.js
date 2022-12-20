const { findUser, saveUser } = require("../db/queries");

const upHerosControl = async (req, res) => {
  const username = req.params.username;
  let user = await findUser(username);

  let update = user.units;
  await update.forEach((hero) => {
    return hero.available++;
  });
  let updateTime = user.last_played;
  updateTime = new Date().toISOString();
  user.last_played = updateTime;

  let message = "You got some heros!";
  return await saveUser(user, res, message);
};

module.exports = { upHerosControl };
