import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Router from "./router";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/v1/")
        .then((serverRes) => console.log(serverRes))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>TEST</h1> */}
      <Router />
    </div>
  );
};

export default App;
