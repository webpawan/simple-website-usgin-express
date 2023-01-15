const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path  = require("path");
// jab ham host karte website ko to khud ka port chiya hota ha usake ya likha

// public static path 
// console.log(path.join(__dirname,"../public"));


const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/weather", (req, res) => {
  res.send("weather");
});
app.get("*", (req, res) => {
  res.send("error");
});

app.listen(port, () => {
  console.log("start");
});
