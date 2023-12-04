import { Router } from "express";
import likecontroller from "../../controller/like.js";
const likerouter =Router()




likerouter.post("/addlikes",likecontroller.like)
// likerouter.post("/findlikes",likecontroller.findlike)

export default likerouter
