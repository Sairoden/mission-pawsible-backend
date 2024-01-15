const { getAllResources } = require("./resourceController");
const { getUserToken } = require("./tokenController");
const { createUser } = require("./userController");

module.exports = {
  getAllResources,
  getUserToken,
  createUser,
};
