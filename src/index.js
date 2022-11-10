const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.end();
/**
 * prod url: https://mvvp-api.cyclic.app/
 * local url: http://localhost:3000/
 */

app.get("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.get("/test-connectdb", (req, res) => {
  if (connection) {
    res.send("connected");
  } else {
    res.send("error connect!");
  }
});

console.log("running on port:" + port);
app.listen(process.env.PORT || port);
