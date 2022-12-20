const jwt = require("jsonwebtoken");

const validate = (req) => {
  let token = req.headers.authorization;
  jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, verified) => {
    if (err) return false;
    return true;
  });
};

module.exports = { validate };
