import { MapContainer, MapBlock, Castle } from "./map.styles";
import { useContext, useState } from "react";
import UnitsMenu from "../units-menu/units-menu.component";
import { Context } from "../../contexts/user-context";

const Map = () => {
  const userMgr = useContext(Context);
  const [isBlockSelected, setIsBlockSelected] = useState(false);
  const [blockSelected, setBlockSelected] = useState(null);

  const handleSelectBlock = (blockID) => {
    setIsBlockSelected(true);
    setBlockSelected(blockID);
  };

  const handleCastleType = (block, user) => {
    let castleType = 1;
    const userLevel = user.authenticatedUser.user.level;
    if (block.hp >= userLevel * 66) {
      castleType = 3;
    } else if (block.hp >= userLevel * 33) {
      castleType = 2;
    } else {
      castleType = 1;
    }
    return castleType;
  };

  return (
    <>
      {userMgr.authenticatedUser.user.current_map && (
        <MapContainer>
          {userMgr.authenticatedUser.user.current_map.map((block, index) => {
            let castleType = handleCastleType(block, userMgr);
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
          {isBlockSelected && (
            <UnitsMenu
              units={userMgr.authenticatedUser.user.units}
              blockSelected={blockSelected}
              setIsBlockSelected={setIsBlockSelected}
            />
          )}
        </MapContainer>
      )}
    </>
  );
};

export default Map;
