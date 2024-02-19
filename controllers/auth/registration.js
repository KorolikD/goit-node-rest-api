const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuid } = require("uuid");
const { sendEmail } = require("../../helpers");
const { BASE_URL } = process.env;

const registration = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email, { s: "250" });
  const verificationToken = uuid();

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL,
    verificationToken,
  });

  await sendEmail({
    to: email,
    subject: "Please Verify Your Email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Confirm your email</a>`,
  });

  res
    .status(201)
    .json({ email: newUser.email, subscription: newUser.subscription });
};

module.exports = registration;
