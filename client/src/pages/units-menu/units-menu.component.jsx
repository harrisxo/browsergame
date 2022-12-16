import { useState } from "react";
import { UnitsMenuContainer, Unit } from "./units-menu.styles";

const UnitsMenu = ({ units }) => {
  const [selectedUnits, setSelectedUnits] = useState(units);

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
    </UnitsMenuContainer>
  );
};

export default UnitsMenu;
