const router = require("express").Router();
const { testControl } = require("../controllers/test");

const testRoute = router.get("/api/v1/", testControl);

module.exports = testRoute;
