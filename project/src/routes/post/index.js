import { Router } from "express";
import postcontroller from "../../controller/post.js";
const postrouter =Router()


postrouter.post("/",postcontroller.create)
postrouter.get("/:id",postcontroller.findone)
postrouter.get("/:id/user",postcontroller.post_user)
postrouter.get("/",postcontroller.findall)
postrouter.delete("/:id",postcontroller.delete)
postrouter.put("/:id",postcontroller.update)

export default postrouter