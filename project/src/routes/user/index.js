import { Router } from "express";
import userController from "../../controller/user.js";
import UserValidator from "../../validation/index.js";
const userRouter =Router()

userRouter.post("/register", UserValidator.create,  userController.register)
userRouter.post("/login",   userController.login)
userRouter.get("/:id",userController.findone)
userRouter.get("/",userController.findall)
userRouter.put("/:id",userController.update)
userRouter.delete("/:id",userController.delete)

export default userRouter


