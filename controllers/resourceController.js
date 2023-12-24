require("dotenv").config({ path: "./.env" });

const getAllResources = async (req, res) => {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API}&qInTitle=pets&language=en,pi`
    );

    const data = await response.json();

    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = {
  getAllResources,
};
