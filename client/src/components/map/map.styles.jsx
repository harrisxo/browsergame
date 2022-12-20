import styled from "styled-components";
import Castle_1 from "../../assets/castle_1.png";
import Castle_2 from "../../assets/castle_2.png";
import Castle_3 from "../../assets/castle_3.png";

export const MapContainer = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
`;

export const MapBlock = styled.div`
  padding: 0.8rem;
  scale: 1;
  width: 25%;
  border: 1px solid ${(props) => (props.blockOccupied ? "#cc5656" : "#41a652")};
  background-color: ${(props) => (props.blockOccupied ? "#ff6b6b" : "#51cf66")};
  p {
    font-size: 2rem;
  }
`;

export const Castle = styled.div`
  background-size: cover;
  background-image: ${(props) => {
    switch (props.castleType) {
      case 1:
        return `url(${Castle_1})`;
      case 2:
        return `url(${Castle_2})`;
      case 3:
        return `url(${Castle_3})`;
      default:
        return `url(${Castle_1})`;
    }
  }};
  width: 4.2rem;
  height: 4.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
