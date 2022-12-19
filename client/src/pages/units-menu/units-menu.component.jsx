import { useState, useContext } from "react";
import {
  UnitsMenuContainer,
  Unit,
  IncrementButton,
  DecrementButton,
  Backdrop,
} from "./units-menu.styles";
import axios from "axios";
import { Context } from "../../contexts/user-context";
const UnitsMenu = ({ units, blockSelected, setIsBlockSelected }) => {
  const userMgr = useContext(Context);
  const [selectedUnits, setSelectedUnits] = useState(units);
  const [error, setError] = useState(null);

  const attackHandler = async (e) => {
    e.preventDefault();
    const errorSubmit = selectedUnits.some((unit) => unit.battling === 0);
    if (errorSubmit) {
      setError("Please fill all the fields");
      return;
    }
    console.log("aaa");
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
    const newBattling =
      Math.pow(battlingDelta, 2) === 1
        ? unitsBattling + battlingDelta
        : battlingDelta;
    setSelectedUnits(
      selectedUnits.map((unit, i) => {
        if (i === unitIndex) {
          return {
            ...unit,
            battling:
              newBattling > availableUnits
                ? unitsBattling
                : Math.max(newBattling, 0),
          };
        }
        return unit;
      })
    );
    console.log(selectedUnits);
  };

  const handleOnChange = (event, unitIndex, availableUnits) => {
    const newValue = event.target.value;
    if (newValue === "" || parseInt(newValue, 10) >= 0) {
      handleSelectedUnitsChange(unitIndex, availableUnits, Number(newValue));
    }
  };

  return (
    <>
      <UnitsMenuContainer>
        {selectedUnits.map((unit, index) => {
          return (
            <Unit key={index}>
              <div>
                <p>{unit.hero_type}</p>
              </div>
              <div>
                <p>{unit.available}</p>
              </div>
              <div>
                <DecrementButton
                  onClick={() =>
                    handleSelectedUnitsChange(index, unit.available, -1)
                  }
                />
                <input
                  value={unit.battling}
                  type="text"
                  onChange={(e) => handleOnChange(e, index, unit.available)}
                />
                <IncrementButton
                  onClick={() =>
                    handleSelectedUnitsChange(index, unit.available, +1)
                  }
                />
              </div>
            </Unit>
          );
        })}
        {error && <p>{error}</p>}
        <form onSubmit={attackHandler}>
          <input type={"submit"} />
        </form>
      </UnitsMenuContainer>
      <Backdrop onClick={() => setIsBlockSelected(false)} />
    </>
  );
};

export default UnitsMenu;
