import styled from "styled-components";

export const RankingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30vw;
  background-color: #f7f7f7;
  z-index: 9;

  h2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.7em;
    margin: 2vh 0;
    font-size: 2em;
  }
  p {
    font-size: 2em;
    margin-left: 1vh;
    margin-bottom: 1vh;
  }
  span {
    cursor: pointer;
  }
`;
