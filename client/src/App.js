import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./contexts/user-context";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home.component";
import Login from "./pages/login/login.component.";
import Register from "./pages/register/register.component";

import axios from "axios";
// import { isTokenExp } from "./utils/utils";
const App = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setAuthenticatedUser } =
    useContext(Context);

  useEffect(() => {
    const isTokenExp = async () => {
      const storedData = localStorage.getItem("userValidation");

      if (typeof storedData === "string") {
        const parse = JSON.parse(storedData);
        console.log(parse);
        if (parse && new Date(parse.expiration) > new Date()) {
          await axios
            .get(`/api/v1/${parse.username}/validate`, {
              headers: { authorization: parse.token },
            })
            .then((serverRes) => {
              console.log(serverRes);
              setAuthenticatedUser(serverRes.data);
              return setIsAuthenticated(true);
            })
            .catch((err) => {
              console.log(err);
              return setIsAuthenticated(false);
            });
        }
      }
    };

    isTokenExp();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const RequiredAuth = ({ children }) => {
    return isAuthenticated ? children : <Login />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default App;
