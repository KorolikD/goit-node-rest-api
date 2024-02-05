const { ctrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const registration = require("./registration");

module.exports = {
  registration: ctrlWrapper(registration),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};
