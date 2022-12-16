import { createContext, useState } from "react";

export const Context = createContext({});

export default function UserProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        authenticatedUser,
        setAuthenticatedUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
