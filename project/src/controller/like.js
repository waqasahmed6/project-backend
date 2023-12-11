import likemodel from "../model/like/index.js"
import postmodel from "../model/post/index.js"
import usermodel from "../model/user/index.js"

 const likecontroller={
like:async(req,res)=>{
  try{  
    const {likes,postId,userId}=req.body
await likemodel.create({
likes,
postId,
userId
})
res.json("like added")
  }catch(err){res.json({meesage:"error occoured"+err})}
},

find:async(req,res)=>{
const{id}=req.params
const data = await likemodel.findOne({
  where:{id},
  include:[postmodel,usermodel]
})
res.json({message:"like found",data})
}
}
export default  likecontroller

