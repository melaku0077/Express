const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.urlencoded({ extended: false }));

app.use("/css", express.static(path.join(__dirname, "public/css")));

app.use("/", (req, res) => {
  let html =
    '<head><title>W3D5</title><link rel="stylesheet" href="css/day.css"/></head>';
  html +=
    '<body><form action="/result" method="POST"><div><label for="name">Name<label><input type="text" id="name" name="name"/><label for="age">Age<label><input type="text" id="age" name="age" /><input type="submit" value="Sumbit Query" /></div></form></body>';

  res.send(html);
});

app.get("/result", (req, res, next) => {
  res.send("Welcome " + req.body.name + " " + req.body.age);
  res.redirect("/output");
});

app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  res.send(`Welcome ${name} and your age is: ${age}`);
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server created successfully on port ${port}`);
});