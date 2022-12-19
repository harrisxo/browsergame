import styled from "styled-components";

export const MapContainer = styled.div`
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

export const MapBlock = styled.div`
  scale: 1;
  width: 25%;
  border: 1px solid red;
  background-color: ${(props) => (props.blockOccupied ? "#ff6b6b" : "#51cf66")};
  p {
    font-size: 2.4rem;
  }
`;
