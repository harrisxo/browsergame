import { useContext, useState } from "react";

import { Context } from "../../contexts/user-context";

import UnitsMenu from "../units-menu/units-menu.component";

import { MapContainer, MapBlock, Castle } from "./map.styles";

const Map = () => {
  const {
    authenticatedUser: { user },
  } = useContext(Context);

  const [isBlockSelected, setIsBlockSelected] = useState(false);
  const [blockSelected, setBlockSelected] = useState(null);

  const handleSelectBlock = (blockID) => {
    setIsBlockSelected(true);
    setBlockSelected(user.current_map[blockID - 1]);
  };

  const handleCastleType = (block, user) => {
    let castleType = 1;
    if (block.hp >= user.level * 400 * 0.66) {
      castleType = 3;
    } else if (block.hp >= user.level * 400 * 0.33) {
      castleType = 2;
    } else {
      castleType = 1;
    }
    return castleType;
  };

  return (
    <>
      {user.current_map && (
        <MapContainer>
          {user.current_map.map((block, index) => {
            let castleType = handleCastleType(block, user);
            return (
              <MapBlock
                key={index}
                blockOccupied={block.occupied}
                onClick={() => handleSelectBlock(index + 1)}
              >
                <Castle castleType={castleType} />
                <p>{block.id}</p>
              </MapBlock>
            );
          })}
          {isBlockSelected && !blockSelected.occupied && (
            <UnitsMenu
              units={user.units}
              blockSelected={blockSelected.id}
              setIsBlockSelected={setIsBlockSelected}
            />
          )}
        </MapContainer>
      )}
    </>
  );
};

export default Map;
