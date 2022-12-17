import { MapContainer, MapBlock } from "./map.styles";
import axios from "axios";
import { useEffect, useState } from "react";
import UnitsMenu from "../units-menu/units-menu.component";

const Map = () => {
  const [user, setUser] = useState(null);
  const [isBlockSelected, setIsBlockSelected] = useState(false);
  const [blockSelected, setBlockSelected] = useState(null);

  useEffect(() => {
    const userCred = {
      username: "medic112",
      password: "111111",
    };
    const userLogin = async (userCred) => {
      await axios
        .post("/api/v1/login", userCred)
        .then((serverRes) => setUser(serverRes.data.user))
        .catch((error) => console.log(error));
    };
    userLogin(userCred);
  }, []);

  const handleSelectBlock = (blockID) => {
    setIsBlockSelected(true);
    setBlockSelected(blockID);
  };
  console.log(user);
  return (
    <MapContainer>
      {user &&
        user.current_map.map((block, index) => {
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
        <UnitsMenu units={user.units} blockSelected={blockSelected} />
      )}
    </MapContainer>
  );
};

export default Map;
