const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "All Ok" });
});

app.listen(3000, () => {
  console.log("Hello World");
});
