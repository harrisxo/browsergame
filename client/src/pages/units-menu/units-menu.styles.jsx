import styled from "styled-components";

export const UnitsMenuContainer = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(35%, -50%);
  background-color: gray;
`;

export const Unit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    margin: 0px 5px;
  }
`;
