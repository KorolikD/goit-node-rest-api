const { validateBody } = require("../middlewares");
const { registerSchema, loginSchema } = require("../schemas");

const authRouter = require("express").Router();

authRouter.post("/register", validateBody(registerSchema));

authRouter.post("/login", validateBody(loginSchema));

authRouter.post("/logout");

authRouter.get("/current");

module.exports = authRouter;
