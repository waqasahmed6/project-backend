import userloginmodel from "../model/user_login/index.js";
import { compare, hash } from "bcrypt";
import Jwt from "jsonwebtoken";

const user_logincontroller = {
  register: async (req, res) => {
    try {
      const { username, useremail, userpassword } = req.body;
      const response = await userloginmodel.findOne({
        where: { useremail },
      });
      if (response) {
        res.json({ messge: "email already registered" });
      } else {
        const hash_pass = await hash(userpassword, 10);

        const created = await userloginmodel.create({
          username,
          useremail,
          userpassword: hash_pass,
        });
        res.json({ message: "registered succesfully" });
      }
    } catch (error) {
      res.json({ message: "something bad happen", error });
    }
  },
  login: async (req, res) => {
    try {
      const { useremail, userpassword } = req.body;

      const data = await userloginmodel.findOne({
        where: { useremail },
      });
      if (!data) {
        res.json({ message: "invalid email" });
      }

      const compares = await compare(userpassword, data.userpassword);
      console.log(compares);

      if (!compares) {
        res.json({ message: "invalid credentials" });
      }

      const info = {
        id: data.id,
        useremail: data.useremail,
        
      };

      const token = Jwt.sign(info, process.env.JSON_SECRET, {
        expiresIn: "2d",
      });
      req.session.token = token;
      req.session.user = info;
      req.session.save();

   res.json({ messgae: "login sucessfully", token,info });
    } catch (err) {
      ({ err, message: "somethind bad happen" });
    }
  },
};
export default user_logincontroller;
