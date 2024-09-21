const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signin", (req, res) => {
    res.send("login")
})

userRouter.post("/signup", (req, res) => {
    res.send("signup")
})

userRouter.get("/purchases", (req, res) => {
    res.send("purchases")
})

module.exports  = { 
    userRouter: userRouter
}