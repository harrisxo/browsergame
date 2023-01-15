const { findUser, saveUser } = require("../db/queries");

const upHerosControl = async (req, res) => {
  const username = req.params.username;
  let user = await findUser(username);
  console.log(user);

  let update = user.units;
  await update.forEach((hero) => {
    return hero.available++;
  });
  console.log(update);
  let updateTime = user.last_played;
  updateTime = new Date().toISOString();
  user.last_played = updateTime;
  console.log(updateTime);

  let message = "You got some heros!";
  console.log(user);
  return await saveUser(user, res, message);
};

module.exports = { upHerosControl };
