const router = require("express").Router();
const { validationControl } = require("../controllers/validate");

const validationRoute = router.get("/api/v1/validate/", validationControl);

module.exports = validationRoute;
