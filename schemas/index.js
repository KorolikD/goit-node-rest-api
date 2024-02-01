const {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} = require("./contactsSchemas");

const { registerSchema, loginSchema } = require("./authSchemas");

module.exports = {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
  registerSchema,
  loginSchema,
};
