import {DataTypes} from "sequelize"
import sequelizes from "../../db/config.js"


const followermodel= sequelizes.define("follower",{

followername:{
type:DataTypes.STRING,
allowNull:false


}

})
export default followermodel



