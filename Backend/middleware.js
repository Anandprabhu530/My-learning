const express = require("express");
const z = require("zod");
const app = express();

app.use(express.json());
const schema = z.object({ email: z.string(), password: z.string() });
// const checker_middleware = (req, res, next) => {
//   const input_data = req.body;
//   const check = schema.safeParse(input_data);
//   if (!check.success) {
//     res.status(412).send("Invalid Input format");
//   }

//   console.log("Hello World from middleware");
//   next();
// };

app.get("/", (req, res) => {
  const data = req.body;
  const ans = body.password[0].length;
  res.status(200).json({ msg: "All Working" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//global-catch
app.use(function error_checker(err, req, res, next) {
  res.json({
    message: "An Error Occured with the server",
  });
});
