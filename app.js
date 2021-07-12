const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const userRoute = require("./routes/user");

mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.use(cors());
app.use(cookieparser());
app.use(bodyparser());

app.use("/api", userRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.......`);
});
