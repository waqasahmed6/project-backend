import { DataTypes } from "sequelize";

import sequelizes from "../../db/config.js";
import commentModel from "../comment/index.js";
import likemodel from "../like/index.js";

const postmodel = sequelizes.define("post", {
  post: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
postmodel.hasMany(commentModel)
commentModel.belongsTo(postmodel)

postmodel.hasMany(likemodel)
likemodel.belongsTo(postmodel)

export default postmodel;
