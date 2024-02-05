const {
  registration,
  login,
  getCurrent,
  logout,
} = require("../controllers/auth");
const { validateBody, authenticate } = require("../middlewares");
const { registerSchema, loginSchema } = require("../schemas");

const authRouter = require("express").Router();

authRouter.post("/register", validateBody(registerSchema), registration);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/logout", authenticate, logout);

authRouter.get("/current", authenticate, getCurrent);

module.exports = authRouter;
