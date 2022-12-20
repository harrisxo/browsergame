import axios from "axios";

export const storeToken = (serverRes) => {
  let token = serverRes.data.token;
  const myExp = new Date(new Date().getTime() + 161 * 60 * 60);
  localStorage.setItem(
    "userValidation",
    JSON.stringify({
      username: serverRes.data.user.username,
      token,
      expiration: myExp.toISOString(),
    })
  );
};

export const isTokenExp = async (setIsAuthenticated, setAuthenticatedUser) => {
  const storedData = localStorage.getItem("userValidation");

  if (typeof storedData === "string") {
    const parse = JSON.parse(storedData);
    if (parse && new Date(parse.expiration) > new Date()) {
      await axios
        .get(`/api/v1/${parse.username}/validate`, {
          headers: { authorization: parse.token },
        })
        .then((serverRes) => {
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

// UP HEROS COUNT

export const upHeros = async (last_played, username) => {
  const msDiff = Math.abs(
    new Date(last_played) - new Date(new Date().toISOString())
  );
  const hrsNotCared = msDiff / (60 * 60 * 1000);
  console.log(hrsNotCared);
  if (hrsNotCared > 1) {
    return await axios
      .patch(`/api/v1/${username}/upheros`)
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err));
  }
  return;
};
