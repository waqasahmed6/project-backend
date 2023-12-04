import {DataTypes} from "sequelize"
import followermodel from "../follower/index.js"
import usermodel from "../user/index.js"
import sequelizes from "../../db/config.js"

const userfollowermodel= sequelizes.define("userFollower",{

userId:{
    type:DataTypes.INTEGER,
    references:{
        model:usermodel,
        key:"id"   
    }
    
},

followerId:{
    type:DataTypes.INTEGER,
    references:{
        model:followermodel,
        key:"id"
    }
}
}) 

usermodel.belongsToMany(followermodel,{through:userfollowermodel})
followermodel.belongsToMany(usermodel,{through:userfollowermodel })


export default userfollowermodel


