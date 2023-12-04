import usermodel from "../model/user/index.js";
import postmodel from "../model/post/index.js";
import likemodel from "../model/like/index.js";
import commentModel from "../model/comment/index.js";

const userController = {
  create: async (req, res) => {
    await usermodel.create({
      userName: "waqas ahmed",
      userEmail: "wa6",
      userPassword: "12345",
    }),
      res.json("user added");
  },
  delete: async (req, res) => {
    try {
      const { id } = req.body;
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
      const { id } = req.body;
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
    const { id } = req.body;

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
