const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/contactsRouter.js");

//💚 створення серверу
const app = express();

//💚 Логування запитів
app.use(morgan("tiny"));

//💚 дозвіл КОРС
app.use(cors());
//💚 Перетворення тіла запиту з json в об'єкт
app.use(express.json());

//💚 Підключення роутів через мідлвару
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

//💚 обробка помилки по дефолту
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

//💚 запуск серверу
app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
