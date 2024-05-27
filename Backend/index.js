const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require("dotenv").config()

app.use(express.json())
mongoose.connect(process.env.MONGO_DB_URL);

app.get("/sign-in", (req, res) => {
  const token = req.headers.authorization
  const decrypted_token = jwt.verify(token,process.env.JWT_SECRET_TOKEN);
  if(decrypted_token)
  res.status(200).json({ msg: "All Ok" });
});

app.get("sign-up",(req,res)=>{
  //sign up the user
})

app.listen(3000, () => {
  console.log("Hello World");
});
