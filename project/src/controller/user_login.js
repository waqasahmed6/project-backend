import userloginmodel from "../model/user_login/index.js";
import { compare, hash } from "bcrypt";
import Jwt from "jsonwebtoken";
import mailer from "../email/index.js";

const user_logincontroller = {
  register: async (req, res) => {
    try {
      const { userName, userEmail, userPassword } = req.body;
      const response = await userloginmodel.findOne({
        where: { userEmail },
      });
      if (response) {
        res.json({ messge: "email already registered" });
      } else {
        const hash_pass = await hash(userPassword, 10);

        const created = await userloginmodel.create({
          userName,
          userEmail,
          userPassword: hash_pass,
        });
        res.json({ message: "registered succesfully" });
      }
    } catch (error) {
      res.json({ message: "something bad happen", error });
    }
  },
  login: async (req, res) => {
    try {
      const { userEmail, userPassword } = req.body;

      const data = await userloginmodel.findOne({
        where: { userEmail },
      });
      if (!data) {
        res.json({ message: "invalid email" });
      }

      const compares = await compare(userPassword, data.userPassword);
      console.log(compares);

      if (!compares) {
        res.json({ message: "invalid credentials" });
      }

      const info = {
        id: data.id,
        useremail: data.userEmail,
      };

      const token = Jwt.sign(info, process.env.JSON_SECRET, {
        expiresIn: "2d",
      });

      mailer({
        from: "waqas@mr10.com",
        to: data.userEmail,
        subject: "Login Notification 1",
        text: "We detected a new login if that wasn't ypu please contact support or reset password",
      });

      req.session.user = info;
      req.session.token = token;
      req.session.save();

      res.json({ messgae: "login sucessfully", token, info });
      console.log(req.session.user?.id)
    } catch (err) {
      ({ err, message: "somethind bad happen" });
    }
  },
};
export default user_logincontroller;
