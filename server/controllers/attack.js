const { findUser, saveUser } = require("../db/queries");

const generateNewMap = () => {
  let newMap = [];
  for (let i = 1; i <= 16; i++) {
    newMap.push({
      id: i,
      occupied: false,
      hp: Math.floor(Math.random() * 100) + 1,
    });
  }
  return newMap;
};

const attackControl = async (req, res) => {
  const { username, blockID } = req.params;
  const unitsReq = req.body.units;

  const user = await findUser(username);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const totalAttack = unitsReq.reduce((acc, unit) => {
    return acc + unit.battling * unit.attack;
  }, 0);

  const currentBlock = user.current_map.filter(
    (block) => block.id == blockID
  )[0];

  const currentBlockHP = currentBlock.hp;

  if (totalAttack < currentBlockHP) {
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
    await saveUser(user, res);
    return;
  }
  if (blockID === 16) {
    user.current_map = generateNewMap();
    user.level += 1;
  }

  saveUser(user, res);
};

module.exports = { attackControl };

/* 
req.body = {
  units: [
    {
      hero_type: string,
      unitsSelected: number,
      attack: number,
    },
  ],
};
*/
