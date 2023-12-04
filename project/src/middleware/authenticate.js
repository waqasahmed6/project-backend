import Jwt  from "jsonwebtoken";

const AuthenticateMiddleware =(req,res,next)=>{
    try {
        let token = req.headers.authorization
        token = token.replace("Bearer ","");
        console.log(token)

        Jwt.verify(token,process.env.JSON_SECRET)

        if(!req.session.user||!req.session.token){
         return res.json({
            message:"invalid request"
         })       
        }
        if(req.session.token!==token){
            return res.json({
                mssage:"ivalid request sd"
            })
        }
next()

    } catch (error) {
        return res.json({
            message:"catch error"
        })
    }
}
export default AuthenticateMiddleware