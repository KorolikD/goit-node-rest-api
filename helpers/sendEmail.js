const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  try {
    const msg = {
      from: "dark_light@ukr.net",
      to,
      subject,
      html,
    };
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error("SendGrid error:", error);
  }
};

module.exports = sendEmail;
