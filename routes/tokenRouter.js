// EXPRESS
const app = require("express");
const router = app.Router();

// CONTROLLERS
const { getUserToken } = require("../controllers");

// ROUTES
router.route("/").get(getUserToken);

module.exports = router;
