import { Router } from "express";
import likecontroller from "../../controller/like.js";
const likerouter =Router()


likerouter.post("/",likecontroller.like)
likerouter.get("/:id",likecontroller.find)

export default likerouter
