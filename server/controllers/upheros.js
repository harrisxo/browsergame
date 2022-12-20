const { findUser, saveUser } = require("../db/queries");

const upHerosControl = async (req, res) => {
  console.log(req.params.username);
  const username = req.params.username;
  let user = await findUser(username);

  let update = user.units;
  await update.forEach((hero) => {
    return hero.available++;
  });
  let message = "You got some heros!";
  return await saveUser(user, res, message);
};

module.exports = { upHerosControl };
