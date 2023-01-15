import styled, { css } from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GiBroadsword, GiFireAxe, GiWizardFace, GiCrown } from "react-icons/gi";

export const UnitsMenuContainer = styled.div`
  position: absolute;
  width: 40rem;
  height: 30rem;
  transform: translate(12.5%, 32.5%);
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 99;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  button {
    font-size: 1.8rem;
    background-color: #fafafa;
    outline: none;
    border: 1px solid #3f3f3f;
    padding: 0.5rem;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      background-color: #3f3f3f;
      color: #fafafa;
    }
  }
`;
export const Unit = styled.div`
  width: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  div {
    width: 9rem;
    position: relative;
  }
  div:nth-child(2) {
    width: 7rem;
  }
  div:nth-child(3) {
    display: flex;
    align-items: center;
    input {
      border: none;
      width: 4rem;
      text-align: center;
      outline: none;
      font-size: 2rem;
      background-color: #fafafa;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  p {
    font-size: 2.4rem;
    margin: 1rem;
  }
  p::first-letter {
    text-transform: capitalize;
  }
`;

const buttonStyles = css`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const IncrementButton = styled(AiOutlinePlusCircle)`
  ${buttonStyles}
`;

export const DecrementButton = styled(AiOutlineMinusCircle)`
  ${buttonStyles}
`;

export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0000008d;
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
`;

const unitStyles = css`
  position: absolute;
  top: 50%;
  transform: translate(-100%, -50%);
  width: 2.4rem;
  height: 2.4rem;
`;

export const UnitWarrior = styled(GiBroadsword)`
  ${unitStyles}
`;

export const UnitVicking = styled(GiFireAxe)`
  ${unitStyles}
`;

export const UnitMagician = styled(GiWizardFace)`
  ${unitStyles}
`;

export const UnitPrinc = styled(GiCrown)`
  ${unitStyles}
`;
