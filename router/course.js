const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/course/purchase", (req, res => {
    res.send("login")
}))


courseRouter.get("/course", (req, res => {
    res.send("login")
}))

module.exports  = { 
    courseRouter: courseRouter
}