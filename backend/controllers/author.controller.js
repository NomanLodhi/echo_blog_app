const db = require("../models")



const authorRegister= async (req,res)=>{
    try{
    const {userId,qualification,bio}=req.body;
    const user = await db.user.findByPk(userId)
    if(!user){
        res.status(401).json({msg:'user not found'})
    }
    await user.update({role:'author'})

    const author=await db.author.create({user_id:userId,qualification,bio})    
    res.status(200).json({msg:'Success',author})
    }
    catch(err){
        res.status(401).json({msg:err.message})
    }
}



module.exports={authorRegister}