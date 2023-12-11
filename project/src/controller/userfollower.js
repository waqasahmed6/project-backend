import commentModel from "../model/comment/index.js";
import followermodel from "../model/follower/index.js";
import likemodel from "../model/like/index.js";
import postmodel from "../model/post/index.js";
import usermodel from "../model/user/index.js";
import userfollowermodel from "../model/userfollower/index.js";
import userFollowerService from "../service/userfollower.js";

const userfollowercontroller = {
  create: async (req, res) => {
    const { userId, followerId } = req.body;
    try {
      await userfollowermodel.create({
        userId,
        followerId,
      });
      res.json({ message: "added succesfully" });
    } catch (err) {
      res.json({ message: "error occoured ", err });
    }
  },

  findall: async (req, res) => {
    try {
    const response = await userFollowerService.findall(req)
    res.json({message:"there we go",response})
    } catch (err) {
      res.json({ err: "csdsd" ,err});
    }
  },

  findpost:async(req,res)=>{
    const{followerId}=req.params
    try {
      const follower= await userfollowermodel.findAll({
        where:{followerId}
      })
      const user=follower.map((ele)=>ele.userId)
      const userpost =await postmodel.findAll({
        where:{userId:user}
        
      })
      res.json({userpost})
    } catch (error) {}
  }
  // console.log(user)


};
export default userfollowercontroller;
;