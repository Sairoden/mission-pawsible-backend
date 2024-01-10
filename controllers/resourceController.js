// DOTENV
require("dotenv").config({ path: "./.env" });

const getAllResources = async (req, res) => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?qInTitle="pets"&sortBy=popularity&language=en&apiKey=${process.env.ORIGINAL_NEWS_API}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    if (data.status !== "ok")
      throw new Error("Could not load resources. Please try again later.");

    return res.status(200).send({ resources: data?.articles });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = {
  getAllResources,
};
