const userRouter = require("express").Router();
// const { Router } = require("express");
const { AllUsers, createUser, deleteUser, updateUser } = require("../controller/user.controller");

// const App = Router();

// fetch Data
userRouter.get("/",AllUsers) 
userRouter.post("/register",createUser)
userRouter.delete("/delete/:id",deleteUser)
userRouter.put("/update/:id",updateUser)


module.exports = userRouter