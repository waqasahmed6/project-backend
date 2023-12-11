import { Router } from "express";
import commentcontroller from "../../controller/comment.js";
const commentrouter =Router()


// commentrouter.post("/post/:post_id/comment",commentcontroller.create)

commentrouter.post("/",commentcontroller.create)
commentrouter.delete("/:id",commentcontroller.delete)
commentrouter.put("/:id",commentcontroller.update)
commentrouter.get("/",commentcontroller.findall)

export default commentrouter