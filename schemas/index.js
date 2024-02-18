const {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} = require("./contactsSchemas");

const {
  registerSchema,
  emailSchema,
  loginSchema,
  subscriptionSchema,
} = require("./authSchemas");

module.exports = {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
  emailSchema,
};
