import {DataTypes} from "sequelize"
import sequelizes from "../../db/config.js"
import postmodel from "../post/index.js"


const followermodel= sequelizes.define("follower",{

followername:{
type:DataTypes.STRING,
allowNull:false


}

})

followermodel.hasMany(postmodel)
postmodel.belongsTo(followermodel)

export default followermodel



