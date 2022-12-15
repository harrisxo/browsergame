const router = require("express").Router();

const { attackControl } = require("../controllers/attack");

const attackRoute = router.patch(
  "/api/v1/users/:username/attack/:blockID",
  attackControl
);

module.exports = attackRoute;
