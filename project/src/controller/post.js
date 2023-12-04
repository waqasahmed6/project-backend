import likemodel from "../model/like/index.js";
import postmodel from "../model/post/index.js";
import commentModel from "../model/comment/index.js";

const postcontroller={
    create: async(req,res)=>{
        try{
            const {post}=req.body
  await postmodel.create({
post,
userId:3
  })
  res.json("post added succesfully")
        }catch(err){console.log("something went wrong post not added in db "+err)}
    },
    findone: async(req,res)=>{
        const{id}=req.body
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
            const {id}=req.body
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
            const {id}=req.body
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



    get:async(req,res)=>{

        const {id}=req.body
  
        const show=  await postmodel.findOne({
           where:{id},
           include:[likemodel,commentModel]
  
        })
  res.json({message:"user found",show})
     },

     findall:async(req,res)=>{

        
  
        const show=  await postmodel.findAll({
        
           include:[likemodel,commentModel]
  
        })
  res.json({message:"user found",show})
     }
     
     

}

export default postcontroller
