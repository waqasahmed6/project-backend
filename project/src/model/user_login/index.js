import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js"


const userloginmodel = sequelizes.define("user_login",{
userName:{
    type:DataTypes.STRING,
    allowNull:false
},
userEmail:{
    type:DataTypes.STRING,
    allowNull:false
},
userPassword:{
    type:DataTypes.STRING,
    allowNull:false
},

})
export default userloginmodel