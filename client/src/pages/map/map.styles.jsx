import styled from "styled-components";

export const MapContainer = styled.div`
  scale: 1;
  width: 60vh;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

export const MapBlock = styled.div`
  scale: 1;
  width: 20%;
  border: 1px solid red;
  background-color: ${(props) => (props.blockOccupied ? "#ff6b6b" : "#51cf66")};
  p {
    text-align: center;
  }
`;
