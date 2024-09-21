const express = require("express");
const app = express();
const { userRouter } = require("./router/user")
const { courseRouter } = require("./router/course")


app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)



app.listen(3000);