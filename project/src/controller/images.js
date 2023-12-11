import ImagesModel from "../model/images/index.js";


const ImagesController={
    upload: async(req,res)=>{
        const{filename}=req.file
        const data = await ImagesModel.create({
            path:filename
        })
      if(data){
        
 console.log(req.file);
 res.json({message:"uploaded successfully",link:`http://localhost:3400/image/${req.file.filename}`});
 
      }
    }}
export default ImagesController