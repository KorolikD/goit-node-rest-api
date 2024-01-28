const colors = require("colors");

const path = require("path");
const configPath = path.join(__dirname, "config", ".env");
require("dotenv").config({ path: configPath });

const connectDB = require("./config");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { PORT = 3000, DB_HOST } = process.env;

const contactsRouter = require("./routes/contactsRouter.js");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

connectDB(DB_HOST);
app.listen(PORT, () => {
  console.log("Server is running. Use our API on port: 3000".green.bold);
});
