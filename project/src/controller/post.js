import likemodel from "../model/like/index.js";
import postmodel from "../model/post/index.js";
import commentModel from "../model/comment/index.js";
import usermodel from "../model/user/index.js"

const postcontroller={
    create: async(req,res)=>{
        try{
            
    const {post,followerId}=req.body
  await postmodel.create({
post,
userId:req.session.user?.id,
followerId
  })
  console.log(req.session.user?.id,"hg")
  res.json("post added succesfully")
        }catch(err){console.log("something went wrong post not added in db "+err)}
    },
    findone: async(req,res)=>{
        const{id}=req.params
        try{
          const data= await postmodel.findOne({
               where:{id},
               include:[likemodel]
            })
            res.json({data})

        }catch(err){res.json("something bad happen")}

    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
           const data= await postmodel.findOne({
                where :{id}
            })
            if(!data){
                res.status(201).json("user not found")
            }
            await data.destroy()
            res.json("deleted succesfully")

        }catch(err){err}
    },
    update:async(req,res)=>{
        try{
            const {id}=req.params
            const{post}=req.body
           const data= await postmodel.findOne({
                where :{id}
            })
            if(!data){
                res.status(201).json("user not found")
            }
             data.post= post
           await data.save()
            res.json("updated succesfully ")

        }catch(err){err}
    },

    post_user:async(req,res)=>{

        const {id}=req.params
        const show=  await postmodel.findOne({
           where:{id},
           include:[usermodel]
  
        })
             res.json({message:"post found",show})
     },
     findall:async(req,res)=>{
        const show=  await postmodel.findAll({
           include:[likemodel,commentModel]
  
        })
  res.json({message:"posts found",show})
     }
     
}

export default postcontroller
