
import multer from"multer"
const storage =multer.diskStorage({
    destination:"./public/images",
    filename:async(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.fieldname+"-"+file.originalname)
    }
})


  const upload = multer({storage})
export default upload



