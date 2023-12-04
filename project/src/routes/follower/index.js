import { Router } from "express";
import followercontroller from "../../controller/follower.js";
const followerrouter =Router()


followerrouter.post("/create",followercontroller.create)
followerrouter.post("/findone",followercontroller.findone)


export default followerrouter
