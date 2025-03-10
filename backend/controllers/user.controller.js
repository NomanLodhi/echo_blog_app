const validator=require('validator');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const db = require('../models');
require('dotenv').config()
const jwt_token=process.env.JWT_TOKEN;

const signUp=async(req,res)=>{
try{
    const {name,email,password}=req.body;
    const profile = req.file ? req.file.filename : null;

if(!name || !email || !password){
    return res.status(401).json({err:true,msg:'Email password and name is required'})
}
if(!validator.isEmail(email)){
   return res.status(401).json({err:true,msg:'Kindly enter valid email'})
}
if(!validator.isStrongPassword(password)){
   return res.status(401).json({err:true,msg:'Kindly enter strong password'})
}
if(!validator.isAlphanumeric(name)){
   return res.status(401).json({err:true,msg:'Name must be alphanumeric'})
}
const SALT= await bcrypt.genSalt(10);
const MIX= await bcrypt.hash(password,SALT);

const userregister=await db.user.create({name,email,password:MIX,profile})

res.status(200).json({status:'success',data:userregister})


}
catch(error){
    res.status(401).json({msg:error.message})
}
}
const signIn=async(req,res)=>{
try{
    const {email,password}=req.body;
    const user=await db.user.findOne({where:{email:email}});
    const compare=await bcrypt.compare(password,user.password);
    if(!compare){
        res.status(401).json({msg:"Please enter valid password"})
    }
    if(!user){
        res.status(401).json({msg:"Email not found"})
    }
    const genToken=(email)=>{
        return  jwt.sign({email},jwt_token,{expiresIn:"168h"})
      }
      const token=genToken(email)
   res.status(200).json({data:user,Token:token})
}
catch(error){
    res.status(401).json({msg:error.message})
}
}
const getUser= async(req,res)=>{
    const {id}=req.params
    req.id=id
    const singleUser=await db.user.findOne({where:{id}})
    res.status(200).json({msg:"User access",UserId:req.id,data:singleUser})
}
const editUser=async(req,res)=>{
    try{
     const {id}=req.params;
     const {name,email,password}=req.body;
     const profile=req.file.filename;
     await db.user.update({name,email,password,profile},{where:{id}});
     const salt=await bcrypt.genSalt(10);
     await bcrypt.hash(password,salt)
     res.json({msg:'successfully edited user information!!'})
    }
    catch(error){
        console.log(error.message)
    }
}
const getUsers=async(req,res)=>{
    const allUsers=await db.user.findAll()
    res.status(200).json({status:'success',data:allUsers})
}

module.exports={signUp,signIn,getUser,getUsers,editUser}