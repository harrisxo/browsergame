import React from "react";
import Map from "../map/map.component";
const Home = () => {
  return (
    <div>
      <h1>This is the home page.</h1>
      <Map />
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  );
};

export default Home;
