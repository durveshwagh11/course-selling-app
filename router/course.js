const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.send("login")
})


courseRouter.get("/preview", (req, res) => {
    res.send("login")
})

module.exports  = { 
    courseRouter: courseRouter
}