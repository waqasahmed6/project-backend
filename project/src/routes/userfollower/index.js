import { Router } from "express";
const userfollowerrouter =Router()
import userfollowercontroller from "../../controller/userfollower.js";


userfollowerrouter.post("/",userfollowercontroller.create)
userfollowerrouter.get("/:userId/followerpost",userfollowercontroller.findall)
userfollowerrouter.get("/:followerId/userPost",userfollowercontroller.findpost)



export default userfollowerrouter
