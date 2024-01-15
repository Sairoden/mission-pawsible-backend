// LIBRARIES
const StreamChat = require("stream-chat").StreamChat;

// DOTENV
require("dotenv").config({ path: "./.env" });

const getUserToken = async (req, res) => {
  try {
    const STREAM_CHAT_API = process.env.STREAM_CHAT_API;
    const STREAM_CHAT_SECRET = process.env.STREAM_CHAT_SECRET;

    const { id } = req.params;

    if (!id) throw new Error("user id is required");

    const serverClient = new StreamChat(STREAM_CHAT_API, STREAM_CHAT_SECRET);
    const token = serverClient.createToken(id);

    await serverClient.upsertUser({
      id: id,
      role: "admin",
    });

    return res.status(200).send({
      message: "token generated successfully",
      token: token,
      userId: id,
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = {
  getUserToken,
};
