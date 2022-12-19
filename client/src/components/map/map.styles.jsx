import styled from "styled-components";

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
  scale: 1;
  width: 25%;
  border: 1px solid ${(props) => (props.blockOccupied ? "#cc5656" : "#41a652")};
  background-color: ${(props) => (props.blockOccupied ? "#ff6b6b" : "#51cf66")};
  p {
    font-size: 2.4rem;
  }
`;
