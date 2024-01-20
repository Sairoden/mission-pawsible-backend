const { getAllResources } = require("./resourceController");
const { getUserToken } = require("./tokenController");
const { createUser } = require("./userController");
const { createChat } = require("./chatController");

module.exports = {
  getAllResources,
  getUserToken,
  createUser,
  createChat,
};
