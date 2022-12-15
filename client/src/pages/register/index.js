import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../contexts/user-context";

function Register() {
  const { setIsLoggedIn, setUsername } = useContext(Context);
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/register/", formValue)
      .then(({ data }) => {
        console.log({ data });
        setUsername(data.user.username);
        localStorage.setItem("JWT Token", data.token);
      })
      .catch((err) => setError(err));
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formValue.username}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formValue.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={formValue.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      {Object.keys(error).length >= 1 && (
        <div>
          {error.message}: {error.response.data.message}
        </div>
      )}
    </div>
  );
}

export default Register;
