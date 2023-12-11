import ImagesController from "../../controller/images.js";
import upload from "../../middleware/multerConfig.js";
import { Router } from "express";
const imageRouter = Router()

 imageRouter.post("/upload", upload.single("image"),ImagesController.upload)

export default imageRouter