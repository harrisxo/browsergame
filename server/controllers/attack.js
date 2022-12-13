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

const attackControl = (req, res) => {
  const { username, blockID } = req.params;
  const unitsReq = req.body.units;

  const user = findUser(username);
  console.log(user);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const totalAttack = unitsReq.reduce((acc, unit) => {
    return acc + unit.attack * unit.selected;
  });

  const currentBlock = user.current_map.filter((block) => block.id === blockID);
  const currentBlockHP = currentBlock.hp;

  if (totalAttack < currentBlockHP) {
    user.units.forEach((unit) => {
      unitsReq.forEach((unitReq) => {
        if (unit.hero_type === unitReq.hero_type) {
          unit.available -= unitReq.selected;
        }
      });
    });

    saveUser(user);
  }
  if (blockID % 16 === 0) {
    user.current_map = generateNewMap();
    user.level += 1;
  }

  saveUser(user);
};

module.exports = { attackControl };

/* 
req.body = {
  username: string,
  blockID: number, , (if blockID%16 == 0 => levels up and generate new map)
  units: [
    {
      hero_type: string,
      unitsSelected: number,
      attack: number,
    },
  ],
};
*/
