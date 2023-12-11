import { Router } from "express";
import followercontroller from "../../controller/follower.js";
const followerrouter =Router()


followerrouter.post("/",followercontroller.create)
followerrouter.get("/",followercontroller.findall)


export default followerrouter
