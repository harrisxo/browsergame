import axios from "axios";

export const storeToken = (serverRes) => {
  let token = serverRes.data.token;
  const myExp = new Date(new Date().getTime() + 161 * 60 * 60);
  console.log(serverRes.data);
  localStorage.setItem(
    "userValidation",
    JSON.stringify({
      username: serverRes.data.user.username,
      token,
      expiration: myExp.toISOString(),
    })
  );
};

export const isTokenExp = async (setAuthenticatedUser, setIsAuthenticated) => {
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

export const clearLocalStorage = () =>
  localStorage.removeItem("userValidation");
