const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_DB_URL);

const User = mongoose.model("User", { email: String, password: String });
const data = mongoose.model("Data", { field1: String, filed2: String });

const logged_in_check = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decrypted_token = jwt.verify(token, process.env.JSON_WEB_TOKEN);
    if (decrypted_token) next();
  } catch (error) {
    res.status(400).json({ server: "Something is up..." });
    return;
  }
};
app.get("/sign-in", logged_in_check, (req, res) => {
  res.status(200).json({ server: "Your Email and password is correct." });
});

app.get("/dashboard", logged_in_check, (req, res) => {
  res.status(200).json({ server: "Dashboard page" });
});

app.post("/signup", async (req, res) => {
  //check if user exists
  const Userexists = await User.findOne({ email: req.body.email });
  if (Userexists) {
    res.status(400).json({ Server: "User already exists. Please Login!" });
    return;
  }
  //save user to database - not adviced to store password in database(can hash the password and store it..)
  const user = new User({ email: req.body.email, password: req.body.password });
  user.save();

  const token = jwt.sign(
    req.body.email + "" + req.body.password,
    process.env.JSON_WEB_TOKEN
  );
  res.cookie("authorization", token);
  res.status(200).json({ Server: "token generation successfull" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
