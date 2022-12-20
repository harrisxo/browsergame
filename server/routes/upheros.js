const router = require("express").Router();
const { upHerosControl } = require("../controllers/upheros");

const upHerosRoute = router.get("/api/v1/:username/upheros", upHerosControl);

module.exports = upHerosRoute;
