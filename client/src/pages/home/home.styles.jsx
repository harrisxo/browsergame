import styled, { css } from "styled-components";
import { BiLogOut, BiTrophy, BiUser } from "react-icons/bi";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  gap: 2rem;
  margin: 5rem auto;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 45rem;
  }
`;

export const HomeNav = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.6rem;
    margin-right: 1.5rem;
  }
`;

const buttonStyles = css`
  font-size: 2.8rem;
  &:hover {
    cursor: pointer;
  }
`;

export const SignoutButton = styled(BiLogOut)`
  ${buttonStyles}
`;

export const RankButton = styled(BiTrophy)`
  ${buttonStyles}
`;

export const UserIcon = styled(BiUser)`
  font-size: 2.8rem;
  margin-right: 1rem;
`;
