import followermodel from "../model/follower/index.js"
import postmodel from "../model/post/index.js"
import usermodel from "../model/user/index.js"



const followercontroller = {

    create:async(req,res)=>{
        try{

          const{followername}=req.body  
        await followermodel.create({
            followername,
            userId:1
        })
        res.json({message:"added succesfully"})
    }catch(err){res.json({message:"error occoured  during db "+err})}
    },

    findall:async(req,res)=>{
        try{
          const data = await followermodel.findAll({
            include:[usermodel]

            })
            res.json({message:"user found",data})

        }catch(err){res.json(err)}



    }

}
export default followercontroller