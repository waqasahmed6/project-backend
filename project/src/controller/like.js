import likemodel from "../model/like/index.js"
import postmodel from "../model/post/index.js"
import usermodel from "../model/user/index.js"

 const likecontroller={
like:async(req,res)=>{
  try{  
    const {likes}=req.body
    const{postId}=req.body


await likemodel.create({
likes,
postId,
userId:2
})
res.json("like added")

  }catch(err){res.json({meesage:"error occoured"+err})}
}



}


export default  likecontroller

