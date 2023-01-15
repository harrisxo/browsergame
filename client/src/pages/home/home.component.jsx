import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../contexts/user-context";
import { clearLocalStorage, upHeros } from "../../utils/utils";

import Map from "../../components/map/map.component";
import Ranking from "../../components/ranking/ranking.component";

import {
  HomeContainer,
  HomeNav,
  UserInfo,
  SignoutButton,
  RankButton,
  UserIcon,
} from "./home.styles";

const Home = () => {
  const [showRanking, setShowRanking] = useState(false);
  const { setIsAuthenticated, authenticatedUser } = useContext(Context);

  const handleSignout = () => {
    clearLocalStorage();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (authenticatedUser) {
      upHeros(
        authenticatedUser.user.last_played,
        authenticatedUser.user.username
      );
    }
  }, []);

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
