const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");

const registration = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "User with this email already exist!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashedPassword });

  res.status(201).json({ id: newUser._id, email: newUser.email });
};

module.exports = registration;
