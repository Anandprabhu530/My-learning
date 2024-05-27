const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require("dotenv").config()

app.use(express.json())
mongoose.connect(process.env.MONGO_DB_URL);

const User = mongoose.model('User',{email:String,password:String})

app.get("/sign-in", (req, res) => {
  const token = req.headers.authorization
  const decrypted_token = jwt.verify(token,process.env.JWT_SECRET_TOKEN);
  if(decrypted_token)
  res.status(200).json({ msg: "All Ok" });
});

app.get("/sign-up",async(req,res)=>{
  //check if user exists
  const Userexists = await mongoose.findOne({email:String})
  if(Userexists){
    res.status(400).json({Server:"User already exists. Please Login!"})
  }
  //save user to database - not adviced to store password in database(can hash the password and store it..)
  const user = new User({email:req.body.email,password:req.body.password});
  user.save();

  const token = jwt.sign(req.body.email + "" + req.body.password,process.env.JWT_SECRET_TOKEN)
  res.status(200).json(token)
})

app.listen(3000, () => {
  console.log("Hello World");
});
