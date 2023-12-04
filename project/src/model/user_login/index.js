import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js"


const userloginmodel = sequelizes.define("user_login",{
username:{
    type:DataTypes.STRING,
    allowNull:false
},
useremail:{
    type:DataTypes.STRING,
    allowNull:false
},
userpassword:{
    type:DataTypes.STRING,
    allowNull:false
},

})
export default userloginmodel