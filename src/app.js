const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
// jab ham host karte website ko to khud ka port chiya hota ha usake ya likha
app.get("/",(req,res)=>{
    res.send("home")
})


app.listen(port,()=>{
console.log("start");
})