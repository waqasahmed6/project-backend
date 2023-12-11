import usermodel from "../model/user/index.js";
import postmodel from "../model/post/index.js";
import likemodel from "../model/like/index.js";
import commentModel from "../model/comment/index.js";
import { compare, hash } from "bcrypt";
import Jwt  from "jsonwebtoken";
import mailer from "../email/index.js";

const userController = {
  register: async (req, res) => {
    try {
      const { userName, userEmail, userPassword } = req.body;
      const response = await usermodel.findOne({
        where: { userEmail },
      });
      if (response) {
        res.json({ messge: "email already registered" });
      } else{
      // console.log(123)
        const hash_pass = await hash(userPassword, 10);

        const created = await usermodel.create({
          userName,
          userEmail,
          userPassword:hash_pass,
        });
        res.json({ message: "registered succesfully" });
      }
        // console.log(req.session.user?.id)
      
    } catch (error) {
      res.json({ message: "something bad happen", error });
    }
  },
  login: async (req, res) => {
    try {
      const { userEmail, userPassword } = req.body;

      const data = await usermodel.findOne({
        where: { userEmail },
      });
      
      if (!data) {
        res.json({ message: "invalid email" });
      }
      
      
      const compares = await compare(userPassword, data.userPassword);
      if (!compares) {
        res.json({ message: "invalid credentials" });
      }


      mailer({
        from: "waqas@mr10.com",
        to: data.userEmail,
        subject: "Login Notification 1",
        text: "We detected a new login if that wasn't ypu please contact support or reset password",
      });
      
      
      const info = {
        id: data.id,
        useremail: data.userEmail,

      };
      
      const token = Jwt.sign(info, process.env.JSON_SECRET, {
        expiresIn: "2d",
      });
      
      req.session.token = token;
      req.session.user = info;
      req.session.save();
      
      res.json({ messgae: "login sucessfully", token, info });
      console.log(req.session.user?.id)
    } catch (err) {
      res.json({ err, message: "somethind bad happen" });
    }
    
  },
  
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await usermodel.findOne({
        where: { id },
      });
      if (!data) {
        res.statuscode(404).json("user not found");
      }
      data.destroy();
      res.json("deleted sucesfully");
    } catch (err) {
      err;
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { userName, userEmail, userPassword } = req.body;
      const data = await usermodel.findOne({
        where: { id },
      });
      if (!data) {
        return res.status(404).json("user not found");
      }
      data.userName = userName;
      data.userEmail = userEmail;
      data.userPassword = userPassword;

      await data.save();
      res.json({ message: "updaed  sucesfully", data });
    } catch (err) {
      console.log(err);
    }
  },

  findone: async (req, res) => {
    const { id } = req.params;

    const show = await usermodel.findOne({
      where: { id },
      include: [postmodel, likemodel, commentModel],
    });
    res.json({ message: "user found", show });
  },

  findall: async (req, res) => {
    const show = await usermodel.findAll({
      // include: [postmodel,likemodel,commentModel],
    });
    res.json({ message: "user found", show });
  },
};
export default userController;
