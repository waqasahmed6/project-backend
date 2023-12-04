import { Router } from "express";
import userController from "../../controller/user.js";
const userRouter =Router()

userRouter.post("/create",userController.create)
userRouter.post("/findone",userController.findone)
userRouter.delete("/delete",userController.delete)
userRouter.put("/update",userController.update)
userRouter.post("/findall",userController.findall)

export default userRouter


