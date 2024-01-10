const app = require("express");
const router = app.Router();

const { getUserToken } = require("../controllers");

router.route("/").get(getUserToken);

module.exports = router;
