import { useEffect, useState } from "react";
import axios from "axios";

import { RankingContainer } from "./ranking.styles";

const Ranking = ({ setShowRanking }) => {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    const fetchRank = async () => {
      await axios
        .get("/api/v1/rank")
        .then((serverRes) => setRank(serverRes.data.data))
        .catch((err) => console.log(err));
    };
    fetchRank();
  }, []);

  return (
    <>
      {rank.length > 0 && (
        <RankingContainer>
          <h2>
            RANK <span onClick={() => setShowRanking(false)}>x</span>
          </h2>
          {rank.map((player, index) => (
            <p key={index}>
              {`${index + 1}° ${player.username}: Lvl-${player.level}`}
            </p>
          ))}
        </RankingContainer>
      )}
    </>
  );
};

export default Ranking;
