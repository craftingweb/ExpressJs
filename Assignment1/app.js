const express = require("express");

const app = express();

app.use("/blog", (req, res, next) => {
  console.log("First Middle Ware, passing next");
  next();
});
app.use("/", (req, res, next) => {
  console.log("Second Middle Ware");
});

app.listen(3000);
