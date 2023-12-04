import { Sequelize } from "sequelize";

const ENVDATA = process.env


const sequelizes = new Sequelize(ENVDATA.DB_NAME,ENVDATA.DB_USER ,ENVDATA.DB_PASSWORD, {
  host: ENVDATA.DB_HOST,
  port: ENVDATA.DB_PORT,
  dialect: ENVDATA.DB_DIALECT,
  logging:false
});

export const connectdb = async () => {
  try {
    await sequelizes.authenticate();
    console.log("connection succesfull");
  } catch (error) {
    console.log("something went wrong during db connection " + error);
  }
};
export default sequelizes;
