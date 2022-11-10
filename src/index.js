const express = require("express");
const app = express();
const port = 3000;

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

console.log("running on port:" + port);
app.listen(process.env.PORT || port);
