const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { _id, email } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(_id, { subscription });
  console.log("🤬>>>  result:\n", result);

  res.json({ email, subscription });
};

module.exports = updateSubscription;
