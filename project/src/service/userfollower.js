import commentModel from "../model/comment/index.js";
import followermodel from "../model/follower/index.js";
import likemodel from "../model/like/index.js";
import postmodel from "../model/post/index.js";
import usermodel from "../model/user/index.js";
import userfollowermodel from "../model/userfollower/index.js";

const userFollowerService = {
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
    const {userId}=req.params
    try {
      const user = await userfollowermodel.findAll({
        where: {
          userId,
        },
      });
      // console.log(user)

      const followers = user.map((ele) => ele.followerId);

      const followerPosts = await postmodel.findAll({
        where: { followerId: followers },
      });
      
      return { followerPosts };
    } catch (err) {
      res.json({ err: "csdsd", err });
    }
  },
  
};







export default userFollowerService;
