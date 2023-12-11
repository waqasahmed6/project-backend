import { Router } from "express";
import postrouter from "./post/index.js";
import userRouter from "./user/index.js";
import commentrouter from "./comment/index.js";
import likerouter from "./likes/index.js";
import followerrouter from "./follower/index.js";
import userfollowerrouter from "./userfollower/index.js";
import loginrouter from "./user_login/index.js";
import imageRouter from "./imageRouter/index.js";

const allroutes = Router()



allroutes.use("/post",postrouter)
allroutes.use("/user",userRouter)
allroutes.use("/comments",commentrouter )
allroutes.use("/likes",likerouter)
allroutes.use("/follower",followerrouter)
allroutes.use("/userfollower",userfollowerrouter)
allroutes.use("/image",imageRouter)
// allroutes.use("/user",loginrouter)

export default allroutes