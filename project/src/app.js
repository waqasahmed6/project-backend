import "dotenv/config"
import express from "express";
import sequelizes, { connectdb } from "./db/config.js";
import initdb from "./db/init.js";
import allroutes from "./routes/index.js";
import Session from "express-session";
import Sequelizestore from "connect-session-sequelize"
import session from "express-session";
import AuthenticateMiddleware from "./middleware/authenticate.js";
import path from "path"
const __dirname = path.resolve();

const port = process.env.PORT;

const app = express();
app.use(express.json());
connectdb();

const mySequelizeStore = Sequelizestore(Session.Store)
const mySequelizeStore1 = new mySequelizeStore ({
  db:sequelizes
})

app.use(session({
  secret:"waqasahmedabbaschshoaibhassan",
  store:mySequelizeStore1,
  saveUninitialized:false,
  resave:true,
  proxy:false,
}))

mySequelizeStore1.sync()

app.use("/image", express.static('public/images'));

initdb()
  .then(() => console.log("db sync"))
  .catch((error) => console.log("db not sync", error));
  app.use("/",allroutes)

  app.post("/",AuthenticateMiddleware,(req,res)=>{
    return res.json({message:"authenticate"})
  })

app.listen(port, (err) => {
  if (!err) {
    console.log("server is listing at port http://localhost:3400");
  } else {
    console.log("somthing went wrong during connection in live server " + err);
  }
});
