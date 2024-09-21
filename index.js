const express = require("express");
const app = express();


app.post("/user/login", (req, res => {
    res.send("login")
}))

app.post("/user/signup", (req, res => {
    res.send("signup")
}))

app.get("/user/purchases", (req, res => {
    res.send("purchases")
}))

app.post("/course/purchase", (req, res => {
    res.send("login")
}))


app.get("/user/course", (req, res => {
    res.send("login")
}))
app.listen(3000);