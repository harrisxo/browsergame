import { MapContainer, MapBlock } from "./map.styles";
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
  return (
    <MapContainer>
      {userMgr.authenticatedUser.user.current_map.map((block, index) => {
        return (
          <MapBlock
            key={index}
            blockOccupied={block.occupied}
            onClick={() => handleSelectBlock(index + 1)}
          >
            <p>{block.id}</p>
          </MapBlock>
        );
      })}
      {isBlockSelected && (
        <UnitsMenu
          units={userMgr.authenticatedUser.user.units}
          blockSelected={blockSelected}
        />
      )}
    </MapContainer>
  );
};

export default Map;
