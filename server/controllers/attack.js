const { findUser, saveUser } = require("../db/queries");

const generateNewMap = (level) => {
  let newMap = [];
  for (let i = 1; i <= 16; i++) {
    newMap.push({
      id: i,
      occupied: i === 1 ? true : false,
      hp: (Math.floor(Math.random() * 400) + 1) * level,
    });
  }
  return newMap;
};

const attackControl = async (req, res) => {
  const { username, blockID } = req.params;
  const unitsReq = req.body.units;
  console.log(blockID);
  const user = await findUser(username);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const totalAttack = unitsReq.reduce((acc, unit) => {
    return acc + unit.battling * unit.attack;
  }, 0);

  const blocksOccupied = user.current_map.reduce((acc, block) => {
    return block.occupied === true ? acc + 1 : acc;
  }, 0);

  const currentBlock = user.current_map[Number(blockID) - 1];
  const currentBlockHP = currentBlock.hp;

  if (totalAttack > currentBlockHP) {
    let message = "You won the battle";
    currentBlock.occupied = true;
    let update = user.units;
    await update.forEach((hero) => {
      return hero.available++;
    });
    user.units = update;
    if (blocksOccupied >= 15) {
      user.current_map = generateNewMap(user.level);
      user.level += 1;
      message = "You won the battle and leveled up";
    }
    return await saveUser(user, res, message);
  }

  if (totalAttack <= currentBlockHP) {
    const subtractUnits = (units, battlingUnits) => {
      return units.map((unit) => {
        const battlingUnit = battlingUnits.filter(
          (battling) => battling.hero_type === unit.hero_type
        )[0];
        if (battlingUnit) {
          unit.available -= battlingUnit.battling;
        }
        return unit;
      });
    };
    user.units = subtractUnits(user.units, unitsReq);
    return await saveUser(user, res, "You lost the battle");
  }
};

module.exports = { attackControl };
