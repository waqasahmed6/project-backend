import{DataTypes} from "sequelize"

import sequelizes from "../../db/config.js";

const likemodel=sequelizes.define("like",{
    likes:{
        type:DataTypes.INTEGER
    }
})
export default likemodel
