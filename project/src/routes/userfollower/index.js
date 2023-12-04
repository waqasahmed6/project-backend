import { Router } from "express";
const userfollowerrouter =Router()
import userfollowercontroller from "../../controller/userfollower.js";


userfollowerrouter.post("/create",userfollowercontroller.create)
userfollowerrouter.post("/findall",userfollowercontroller.findall)



export default userfollowerrouter
