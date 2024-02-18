const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: example@example.com",
    "any.required": "Missing required field email",
  }),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: example@example.com",
    "any.required": "Missing required field email",
  }),
  password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: example@example.com",
    "any.required": "Missing required field email",
  }),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string().required().valid("starter", "pro", "business"),
});

module.exports = {
  registerSchema,
  loginSchema,
  emailSchema,
  subscriptionSchema,
};
