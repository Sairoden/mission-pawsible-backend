// EXPRESS
const app = require("express");
const router = app.Router();

// CONTROLLERS
const { createUser } = require("../controllers");

// ROUTES
router.route("/").post(createUser);

module.exports = router;
