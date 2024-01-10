// EXPRESS
const app = require("express");
const router = app.Router();

// CONTROLLERS
const { getUserToken } = require("../controllers");

// ROUTES
router.route("/:id").get(getUserToken);

module.exports = router;
