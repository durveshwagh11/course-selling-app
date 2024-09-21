const express = require("express");
const app = express();


app.post("/login", (req, res => {
    res.send("login")
}))

app.post("/signup", (req, res => {
    res.send("signup")
}))

app.post("/login", (req, res => {
    res.send("login")
}))

app.listen(3000);