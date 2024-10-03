require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { userRouter } = require("./router/user")
const { courseRouter } = require("./router/course")
const { adminRouter } = require("./router/admin");
app.use(express.json());

app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin", adminRouter);


async function main() {
    await mongoose.connect(process.env.MY_DATABASE_STRING)
        console.log("Connected to the database");

        app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
}

main();
