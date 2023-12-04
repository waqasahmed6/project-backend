import Joi from "joi";

const UserValidator = {
    create:(req,res,next)=>{
        try{
            const body=req.body
            const schema =Joi.object({
                username: Joi.string().min(3).max(15).required(),
                useremail: Joi.string().min(3).max(15).required(),
                userpassword: Joi.string().min(3).max(15).required(),
            })
            const{error,value}=schema.validate(body)
            if(error){
                res.json({message:"error occoured",error})
            }next()
        }catch(err){res.json({err})}

    }
}
export default UserValidator;
