const bcrypt = require('bcrypt');
const { Router } = require("express");
const { userModel } = require("../db")
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const { email, password, firstname, lastname } = req.body; 

    if (!email || !password || !firstname || !lastname) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({    
            email: email,
            password: hashedPassword, 
            firstname: firstname,
            lastname: lastname
        });

        res.status(201).json({
            message: "SignUp Succeeded"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error during signup",
            error: error.message
        });
    }
});

userRouter.post("/signin", (req, res) => {
    res.send("signin")
})

userRouter.get("/purchases", (req, res) => {
    res.send("purchases")
})

module.exports  = { 
    userRouter: userRouter
}