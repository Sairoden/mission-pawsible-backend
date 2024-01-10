// EXPRESS
const app = require("express");
const router = app.Router();

// CONTROLLERS
const { getAllResources } = require("../controllers");

// ROUTES
router.route("/").get(getAllResources);

module.exports = router;
