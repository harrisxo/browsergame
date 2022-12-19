import styled from "styled-components";
import { BiLogOut, BiTrophy, BiUser } from "react-icons/bi";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  gap: 2rem;
  margin: 5rem auto;
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

export const SignoutButton = styled(BiLogOut)`
  font-size: 2.8rem;
  &:hover {
    cursor: pointer;
  }
`;

export const RankButton = styled(BiTrophy)`
  font-size: 2.8rem;
  &:hover {
    cursor: pointer;
  }
`;

export const UserIcon = styled(BiUser)`
  font-size: 2.8rem;
  margin-right: 1rem;
`;
