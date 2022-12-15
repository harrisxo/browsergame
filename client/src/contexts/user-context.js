import { createContext, useState } from "react";

export const Context = createContext({});

export default function UserProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <Context.Provider
      value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}
    >
      {props.children}
    </Context.Provider>
  );
}
