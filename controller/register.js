import register from "../models/register.js";
import bcrypt from "bcrypt"
const registerUser=async(req,res)=>{

    try {
        const data=req.body;
        const salt=await bcrypt.genSalt(7) 
        const check=await register.findOne({email:data.email})
        const hashpassowrd=await bcrypt.hash(data.password,salt)
        res.send(data)
        if(check){
            return res.status(409).json({
                message :"user already exist"
            })
        }
        else{
            let registerInstance= new register({
                email:data.email,
                password:hashpassowrd
            });
            let result= registerInstance.save()
            res.status(2001).json({
                message:"data saved seccessfully",
                error:nul,
                data:result 
                
            })
        }
    } catch (err) {
      console.log("error catched ",err)  
      res.status(500).json({
        message:"failed to save data "
        error:"failed"
      })
    }
}
export default registerUser ;