const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
// jab ham host karte website ko to khud ka port chiya hota ha usake ya likha

// public static path
// console.log(path.join(__dirname,"../public")));

const static_path = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../template/views")
const partials_path = path.join(__dirname,"../template/partials")
app.set("views", "../views");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("start");
});

// main root folder me views karna hota ha yadi template egin use karna ha
