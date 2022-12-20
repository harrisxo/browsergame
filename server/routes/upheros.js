const router = require("express").Router();
const { upHerosControl } = require("../controllers/upheros");

const upHerosRoute = router.patch("/api/v1/:username/upheros", upHerosControl);

module.exports = upHerosRoute;
