const { SENDGRID_API_KEY } = process.env;
const sg = require("@sendgrid/mail");
sg.setApiKey(SENDGRID_API_KEY);

module.exports = {
  sendEmail: ({ body: { contentBody, contactName, contactEmail } }, res) => {
    const msg = {
      to: "jason.laico@gmail.com",
      from: contactEmail,
      subject: `New message from Daddy's Garage`,
      text: `From: ${contactName}.
  ${contentBody}`
    };
    sg.send(msg);
    res.status(200).json("Success");
  }
};