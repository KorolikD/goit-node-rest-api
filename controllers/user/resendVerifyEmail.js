const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, "Missing required field email");
  }

  const user = await User.findOne({ email });

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  await sendEmail({
    to: email,
    subject: "Please Verify Your Email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${user.verificationToken}">Confirm your email</a>`,
  });

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
