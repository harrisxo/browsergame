import { useState, useContext } from "react";
import { UnitsMenuContainer, Unit } from "./units-menu.styles";
import axios from "axios";
import { Context } from "../../contexts/user-context";
const UnitsMenu = ({ units, blockSelected }) => {
  const userMgr = useContext(Context);
  const [selectedUnits, setSelectedUnits] = useState(units);

  const attackHandler = async (e) => {
    e.preventDefault();
    // selectedUnits.map((obj) => (obj.available -= obj.battling));
    await axios
      .patch(
        `/api/v1/users/${userMgr.authenticatedUser.user.username}/attack/${blockSelected}`,
        { units: selectedUnits }
      )
      .then((serverRes) => {
        console.log(serverRes.data);

        userMgr.setAuthenticatedUser((prev) => {
          return { ...prev, user: serverRes.data.data };
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSelectedUnitsChange = (
    unitIndex,
    availableUnits,
    battlingDelta
  ) => {
    const currentUnit = selectedUnits[unitIndex];
    const unitsBattling = currentUnit.battling;
    const newBattling = unitsBattling + battlingDelta;
    setSelectedUnits(
      selectedUnits.map((unit, i) => {
        if (i === unitIndex) {
          return {
            ...unit,
            battling:
              newBattling > availableUnits || newBattling < 0
                ? unitsBattling
                : newBattling,
          };
        }
        return unit;
      })
    );
  };

  return (
    <UnitsMenuContainer>
      {selectedUnits.map((unit, index) => {
        return (
          <Unit key={index}>
            <p>{unit.hero_type}</p>
            <p>{unit.available}</p>
            <span
              onClick={() =>
                handleSelectedUnitsChange(index, unit.available, -1)
              }
            >
              -
            </span>
            <span>{unit.battling}</span>
            <span
              onClick={() =>
                handleSelectedUnitsChange(index, unit.available, +1)
              }
            >
              +
            </span>
          </Unit>
        );
      })}
      <form onSubmit={attackHandler}>
        <input type={"submit"} />
      </form>
    </UnitsMenuContainer>
  );
};

export default UnitsMenu;
