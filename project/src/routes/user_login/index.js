import { Router } from "express";
import user_logincontroller from "../../controller/user_login.js";
import UserValidator from "../../validation/index.js";
// import movievalidator from "../../../../src/validation/index.js";
const loginrouter=Router()


loginrouter.post("/register" ,  UserValidator.create ,user_logincontroller.register)
loginrouter.post("/login",user_logincontroller.login)




export default loginrouter
