const express = require("express");
const userRouter = require("./router/user.router");
const app = express();
const cors = require("cors");
const PORT = 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./config/db");

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is connected at http://localhost:${PORT}`);
});
