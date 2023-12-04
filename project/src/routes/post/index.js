import { Router } from "express";
import postcontroller from "../../controller/post.js";
const postrouter =Router()


postrouter.post("/create",postcontroller.create)
postrouter.post("/findone",postcontroller.findone)
postrouter.delete("/delete",postcontroller.delete)
postrouter.put("/update",postcontroller.update)
postrouter.post("/get",postcontroller.get)
postrouter.post("/findall",postcontroller.findall)

export default postrouter