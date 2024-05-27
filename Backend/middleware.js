const express = require("express");
const z = require("zod");
require("dotenv").config();

const app = express();

app.use(express.json());

const sample_data = [
  { email: "testuser01@gmail.com", password: "testuser01" },
  { email: "testuser02@gmail.com", password: "testuser02" },
  { email: "testuser03@gmail.com", password: "testuser03" },
];

const schema = z.object({ email: z.string(), password: z.string() });

const checker_middleware = (req, res, next) => {
  const parser = schema.safeParse(req.body);
  if (!parser.success) {
    res.status(411).json({ Server: "Something wrong with your input" });
    return;
  }
  let found = false;
  sample_data.forEach((element) => {
    if (
      element.email === req.body.email &&
      element.password === req.body.password
    ) {
      found = true;
    }
  });
  if (found) {
    next();
  } else {
    res.status(403).json({ Server: "Email or password is incorrect" });
  }
};

app.get("/", checker_middleware, (req, res) => {
  const token = jwt.sign(req.body.email, process.env.JSON_WEB_TOKEN);
  res.status(200).json({ token: token });
});

app.get("/signin", (req, res) => {
  const token = req.headers.authorization;
  const decryted_token = jwt.verify(token, process.env.JSON_WEB_TOKEN);
  if (decryted_token) {
    res.json({ Server: "All good" });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//global-catch
// app.use(function error_checker(err, req, res, next) {
// const data = req.body;
// const ans = body.password[0].length;
// res.status(404).json({
//   message: "An Error Occured with the server",
// });
// next();
// });
