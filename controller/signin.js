import signin from "../models/register.js"
import bcrypt from "bcrypt"
import jsonwebtoke from "jsonwebtoken"

const signIncontroller =async(req,res)=>{
    try {
        const{email,password}=req.body
        const user=await signin.findOne(email);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
    } catch (error) {
        
    }
    const ifPasswordCorrect=await bcrypt.compare(password,user.password)
    if(! ifPasswordCorrect){
        return res.status(401).json({
            message:"your password is wrong"
        })
    }

    const token
}