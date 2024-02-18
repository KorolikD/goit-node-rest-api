const { ctrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent");
const updateAvatar = require("./updateAvatar");
const updateSubscription = require("./updateSubscription");
const verifyEmail = require("./userVerify");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
