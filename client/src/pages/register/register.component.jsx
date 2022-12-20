import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../contexts/user-context";
import { storeToken } from "../../utils/utils";
import { AuthContainer, AuthForm, AuthInput } from "../login/login.styles";
const Register = () => {
  const { setIsAuthenticated, setAuthenticatedUser } = useContext(Context);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
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
      .post("/api/v1/register", user)
      .then((res) => {
        setAuthenticatedUser(res.data);
        storeToken(res);
        setIsAuthenticated(true);
        // localStorage.setItem("JWT Token", res.data.token);
      })
      .catch(({ response }) => {
        setError(`Error ${response.status}: ${response.data.message}`);
      });
  };

  return (
    <AuthContainer>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <AuthForm>
          <AuthInput>
            <label htmlFor="username"> Username </label>
            <input
              type="text"
              id="username"
              value={user.username}
              name="username"
              onChange={(event) => {
                onInputChange(event);
              }}
            />
          </AuthInput>
          <AuthInput>
            <label htmlFor="username"> Email </label>
            <input
              type="text"
              id="email"
              value={user.email}
              name="email"
              onChange={(event) => {
                onInputChange(event);
              }}
            />
          </AuthInput>
          <AuthInput>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              value={user.password}
              name="password"
              onChange={(event) => {
                onInputChange(event);
              }}
            />
          </AuthInput>
          <input type="submit" value="Register" />
        </AuthForm>
      </form>
      <a href="/login">Login</a>
      {error}
    </AuthContainer>
  );
};

export default Register;
