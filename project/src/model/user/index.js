import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js";
import postmodel from "../post/index.js";
import commentModel from "../comment/index.js";
import likemodel from "../like/index.js";
import followermodel from "../follower/index.js";

const usermodel = sequelizes.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userEmail:{
    type:DataTypes.STRING,
    allowNull:false
  },
  userPassword:{
    type:DataTypes.STRING,
    allowNull:false
  }
});
usermodel.hasMany(postmodel)
postmodel.belongsTo(usermodel)


usermodel.hasMany(commentModel)
commentModel.belongsTo(usermodel)

usermodel.hasOne(likemodel)
likemodel.belongsTo(usermodel)



export default usermodel;
