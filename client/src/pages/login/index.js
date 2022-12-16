import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../contexts/user-context";

const Login = () => {
  const { setIsAuthenticated, setAuthenticatedUser } = useContext(Context);
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/v1/login", user)
      .then((res) => {
        setIsAuthenticated(true);
        setAuthenticatedUser(res.data);
        console.log("User authenticated!");
        console.log(res.data);
      })
      .catch(({ response }) => {
        setError(`Error ${response.status}: ${response.data.message}`);
      });
  };

  return (
    <div>
      <h1>This is the login page.</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label for="username"> Username: </label>
            <input
              type="text"
              id="username"
              value={user.username}
              name="username"
              onChange={(event) => {
                onInputChange(event);
              }}
            />
          </li>
          <li>
            <label for="password"> Password: </label>
            <input
              type="password"
              id="password"
              value={user.password}
              name="password"
              onChange={(event) => {
                onInputChange(event);
              }}
            />
          </li>
          <input type="submit" value="Submit" />
        </ul>
      </form>
      {error}
    </div>
  );
};

export default Login;
