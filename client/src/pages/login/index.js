import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../contexts/user-context";

function Login() {
  const { setIsLoggedIn, setUsername } = useContext(Context);
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/login/", formValue)
      .then(({ data }) => {
        console.log({ data });
        setUsername(data.user.username);
        localStorage.setItem("JWT Token", data.token);
      })
      .catch((err) => setError(err));
    console.log(error);
    setError("");
    setIsLoggedIn(true);
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formValue.username}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          value={formValue.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      {Object.keys(error).length >= 1 && (
        <div>
          {error.message}: {error.response.data.message}
        </div>
      )}
    </div>
  );
}

export default Login;
