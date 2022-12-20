import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/user-context";
import Map from "../../components/map/map.component";
import {
  HomeContainer,
  HomeNav,
  UserInfo,
  SignoutButton,
  RankButton,
  UserIcon,
} from "./home.styles";
import { clearLocalStorage, upHeros } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import Ranking from "../../components/Ranking/Ranking";

const Home = () => {
  const [showRanking, setShowRanking] = useState(false);
  const { setIsAuthenticated, authenticatedUser } = useContext(Context);
  const navigate = useNavigate();

  const handleSignout = () => {
    clearLocalStorage();
    setIsAuthenticated(false);
  };

  // console.log(authenticatedUser.user.last_played);
  // console.log(authenticatedUser.user.username);

  useEffect(() => {
    upHeros(
      authenticatedUser.user.last_played,
      authenticatedUser.user.username
    );
  }, [authenticatedUser.user.units]);

  return (
    <HomeContainer>
      <div>
        <HomeNav>
          <SignoutButton onClick={handleSignout} />
          <RankButton onClick={() => setShowRanking(true)} />
        </HomeNav>
        <UserInfo>
          <UserIcon />
          {authenticatedUser && (
            <>
              <span>{authenticatedUser.user.username}</span>
              <span>{`Lvl: ${authenticatedUser.user.level}`}</span>
            </>
          )}
        </UserInfo>
      </div>
      {showRanking && <Ranking setShowRanking={setShowRanking} />}
      <Map />
    </HomeContainer>
  );
};

export default Home;
