const express = require("express");

const app = express();

const checker_middleware = (req, res, next) => {
  //check auth and other things
  console.log("Hello World from middleware");
  next();
};

app.get("/", checker_middleware, (req, res) => {
  res.status(200).json({ msg: "All Working" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
