const router = require("express").Router();
const { rankControl } = require("../controllers/rank");
const rankRoute = router.get("/api/v1/rank", rankControl);

module.exports = rankRoute;
