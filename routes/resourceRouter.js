const app = require("express");
const router = app.Router();

const { getAllResources } = require("../controllers");

router.route("/").get(getAllResources);

module.exports = router;
