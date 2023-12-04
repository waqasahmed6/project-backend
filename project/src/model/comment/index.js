import {DataTypes} from "sequelize"
import sequelizes from "../../db/config.js";

const commentModel= sequelizes.define("comment",{
comment:{
    type:DataTypes.STRING,
    allowNull:true
}
})
export default commentModel