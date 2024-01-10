// LIBRARIES
const StreamChat = require("stream-chat").StreamChat;

// DOTENV
require("dotenv").config({ path: "./.env" });

const getUserToken = async (req, res) => {
  try {
    const STREAM_CHAT_API = process.env.STREAM_CHAT_API;
    const STREAM_CHAT_SECRET = process.env.STREAM_CHAT_SECRET;

    if (!req.body.id) throw new Error("user id is required");

    const serverClient = new StreamChat(STREAM_CHAT_API, STREAM_CHAT_SECRET);

    const token = serverClient.createToken(req.body.id);

    return res.status(200).send({
      message: "token generated successfully",
      token: token,
      userId: req.body.id,
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = {
  getUserToken,
};

//
