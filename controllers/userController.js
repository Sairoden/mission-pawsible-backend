// PROJECT ID 2c8983a9-7750-48e3-86c6-e4ecf46034a9

// PRIVATE KEY 5a173aed-4b61-46d1-918d-551951fb71b9

// DOTENV
require("dotenv").config({ path: "./.env" });

const axios = require("axios");

const createUser = async (req, res) => {
  try {
    const { username } = req.body;

    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": process.env.CHAT_ENGINE_SECRET } }
    );

    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
};

module.exports = {
  createUser,
};
