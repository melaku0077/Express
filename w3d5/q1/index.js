const express = require("express");

const app = express();
const port = 3000;

console.log("Starting server...");

app.get("/", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  res.send(`Welcome ${name} and your age is: ${age}`);
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server created successfully on port ${port}`);
});
