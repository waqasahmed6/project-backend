import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js";

const ImagesModel= sequelizes.define("images",{
path:{
type:DataTypes.STRING,
allowNull:false    
}
})   

export default ImagesModel