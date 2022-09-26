const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  let html = "<head><title>W3D5</title></head>";
  html +=
    '<body><form action="/result" method="POST"><div><label for="name">Name<label><input type="text" id="name" name="name"/><label for="age">Age<label><input type="text" id="age" name="age" /><input type="submit" value="Sumbit Query" /></div></form></body>';

  res.send(html);
});

app.get("/result", (req, res) => {
  res.send("Welcome " + req.body.name + " " + req.body.age);
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server created successfully on port ${port}`);
});
