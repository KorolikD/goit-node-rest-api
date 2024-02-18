const { registration, login, logout } = require("../controllers/auth");
const {
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../controllers/user");
const { validateBody, authenticate, upload } = require("../middlewares");
const {
  registerSchema,
  emailSchema,
  loginSchema,
  subscriptionSchema,
} = require("../schemas");

const authRouter = require("express").Router();

authRouter.post("/register", validateBody(registerSchema), registration);

authRouter.get("/verify/:verificationToken", verifyEmail);
authRouter.post("/verify/", validateBody(emailSchema), resendVerifyEmail);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/logout", authenticate, logout);

authRouter.get("/current", authenticate, getCurrent);

authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = authRouter;
