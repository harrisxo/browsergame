const jwt = require("jsonwebtoken");

const validateControl = (req, res) => {
  console.log("adsadasdsa");
  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(401).json({ message: "No token found" });
  } else {
    jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, verified) => {
      err
        ? res.status(401).json({ message: "Not Auth...." })
        : res.status(200).send("Yoohoo");
    });
  }
};

module.exports = { validateControl };
