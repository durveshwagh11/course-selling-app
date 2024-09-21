const { Router } = require("express");

const userRouter = Router();

userRouter.post("/user/signin", (req, res => {
    res.send("login")
}))

userRouter.post("/user/signup", (req, res => {
    res.send("signup")
}))

userRouter.get("/user/purchases", (req, res => {
    res.send("purchases")
}))

module.exports  = { 
    userRouter: userRouter
}