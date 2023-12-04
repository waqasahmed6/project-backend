import { Router } from "express";
import commentcontroller from "../../controller/comment.js";
const commentrouter =Router()



commentrouter.post("/create",commentcontroller.create)
commentrouter.delete("/delete",commentcontroller.delete)
commentrouter.put("/update",commentcontroller.update)
commentrouter.post("/findall",commentcontroller.findall)

export default commentrouter