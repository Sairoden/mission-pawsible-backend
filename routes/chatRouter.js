// EXPRESS
const app = require("express");
const router = app.Router();

// CONTROLLERS
const { createChat } = require("../controllers");

// ROUTES
router.route("/").post(createChat);

module.exports = router;
