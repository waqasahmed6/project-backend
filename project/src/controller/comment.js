import commentModel from "../model/comment/index.js"
import commentmodel from "../model/comment/index.js"
import usermodel from "../model/user/index.js"

const commentcontroller ={

        create:async(req,res)=>{
            try{
     const {comment,postId,userId}=req.body
       await commentmodel.create({
             comment,
            postId,
            userId //req.session.user?.id

      })
      res.json("comment added succesfully")
            }catch(err){console.log("something went wrong post not added in db "+err)}
        },
        
        delete:async(req,res)=>{
            try{
                const {id}=req.params
               const data= await commentmodel.findOne({
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
                const{comment}=req.body
               const data= await commentmodel.findOne({
                    where :{id}
                })
                if(!data){
                    res.status(201).json("user not found")
                }
                 data.comment= comment
               await data.save()
                res.json("updated succesfully ")
    
            }catch(err){console.log(err)}
        },
        findall:async(req,res)=>{
            const data = await commentModel.findAll({
                include:[{model:usermodel,attributes:["userName"]}]
            })
            res.json({data})
        }
        
    }
    export default commentcontroller
    
