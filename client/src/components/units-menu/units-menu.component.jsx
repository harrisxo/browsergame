import { useState, useContext } from "react";
import axios from "axios";

import { Context } from "../../contexts/user-context";

import {
  UnitsMenuContainer,
  ButtonContainer,
  Unit,
  IncrementButton,
  DecrementButton,
  Backdrop,
  UnitWarrior,
  UnitVicking,
  UnitMagician,
  UnitPrinc,
} from "./units-menu.styles";

const heroTypeToComponent = {
  warrior: UnitWarrior,
  vicking: UnitVicking,
  magician: UnitMagician,
  prince: UnitPrinc,
};

const UnitsMenu = ({ units, blockSelected, setIsBlockSelected }) => {
  const {
    authenticatedUser: { user },
    setAuthenticatedUser,
  } = useContext(Context);

  const [selectedUnits, setSelectedUnits] = useState(units);

  // add a select all button
  const handleAttack = async (e) => {
    e.preventDefault();
    // custom hook
    await axios
      .patch(`/api/v1/users/${user.username}/attack/${blockSelected}`, {
        units: selectedUnits,
      })
      .then((serverRes) => {
        setAuthenticatedUser((prev) => {
          return { ...prev, user: serverRes.data.data };
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSelectAll = () => {
    const allUnitsSelected = selectedUnits.map((unit) => ({
      ...unit,
      battling: unit.available,
    }));
    setSelectedUnits(allUnitsSelected);
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
  };

  const handleUnitsSelected = (event, unitIndex, availableUnits) => {
    const newValue = event.target.value;
    if (newValue === "" || parseInt(newValue, 10) >= 0) {
      handleSelectedUnitsChange(unitIndex, availableUnits, Number(newValue));
    }
  };

  return (
    <>
      <UnitsMenuContainer>
        {selectedUnits.map((unit, index) => {
          const UnitComponent = heroTypeToComponent[unit.hero_type];
          return (
            <Unit key={index}>
              <div>
                {<UnitComponent />}
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
                  onChange={(e) =>
                    handleUnitsSelected(e, index, unit.available)
                  }
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
        <ButtonContainer>
          <button onClick={handleAttack}>Attack</button>
          <button onClick={handleSelectAll}>Select all</button>
        </ButtonContainer>
      </UnitsMenuContainer>
      <Backdrop onClick={() => setIsBlockSelected(false)} />
    </>
  );
};

export default UnitsMenu;
