import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Ranking.module.css";
const Ranking = ({ setShowRanking }) => {
  const [rank, setRank] = useState([]);

  const fetchRank = async () => {
    await axios
      .get("/api/v1/rank")
      .then((serverRes) => setRank(serverRes.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRank();
  }, []);

  return (
    <article className={classes.article}>
      <h2 className={classes.h2}>
        RANK{" "}
        <span className={classes.close} onClick={() => setShowRanking(false)}>
          x
        </span>
      </h2>
      {rank.map((player) => (
        <p className={classes.p}>
          - {player.username}: lvl-{player.level}
        </p>
      ))}
    </article>
  );
};

export default Ranking;
