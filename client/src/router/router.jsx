import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/user-context";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home.component";
import Login from "../pages/login/login.component.";
import Register from "../pages/register/register.component";

function Router() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(Context);

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
}

export default Router;
