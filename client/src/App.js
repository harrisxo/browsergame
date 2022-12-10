import "./App.css";
import { useEffect } from "react";
import axios from "axios";

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
      <h1>TEST</h1>
    </div>
  );
};

export default App;
