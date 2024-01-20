// DOTENV
require("dotenv").config({ path: "./.env" });
const sgMail = require("@sendgrid/mail");

const createChat = (req, res) => {
  const { email } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API);

  const msg = {
    to: email,
    from: {
      email: "missionpawsible123@gmail.com",
      name: "Mission Pawsible",
    },
    templateId: "d-bc5e9eca5f7c4ad7a6cd7a1b5ab1664f",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch(error => {
      console.error(error);
    });

  return res.status(200).send("Email sent");
};

// Export the controller object
module.exports = {
  createChat,
};
