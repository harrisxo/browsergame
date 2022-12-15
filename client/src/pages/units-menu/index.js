import { useState } from "react";

const UnitsMenu = ({ units }) => {
  const [selectedUnits, setSelectedUnits] = useState(units);

  const handleSelectedUnitsChange = (index, available, delta) => {
    const currentUnit = selectedUnits[index];
    const unitsBattling = currentUnit.battling;
    const newBattling = unitsBattling + delta;
    setSelectedUnits(
      selectedUnits.map((unit, i) => {
        if (i === index) {
          return {
            ...unit,
            battling:
              newBattling > available || newBattling < 0
                ? unitsBattling
                : newBattling,
          };
        }
        return unit;
      })
    );
  };

  return (
    <div>
      {selectedUnits.map((unit, index) => {
        return (
          <div key={index}>
            <p>
              {unit.hero_type}
              {unit.available}
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
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UnitsMenu;

// {hero_type: 'warrior', attack: 5, available: -1, battling: 0}

// hero (5) - 0 +
