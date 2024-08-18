const express =require('express');
const router=express.Router();
const User=require("../models/user");
const {body,validator, validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SEC='SHRAVAN$123456S';
router.post("/newuser",
[
body("name",'enter a valid name').isLength({min:3}),
body("email","enter the valid email").isEmail(),
body("password","enter the valid password").isLength({min:5})
],async(req,res)=>{
    let error1=false;
const error=validationResult(req);
if(!error.isEmpty())
{
   return  res.status(400).json({error:error.array()})
}
try{
const {name,email,password}=req.body;
let user=await User.findOne({email:email});
if(user)
{
    error1=true
  return  res.status(400).json({msg:'Already user with this email exits',error1})
}
const salt=await bcrypt.genSalt(10);
const secPass=await bcrypt.hash(password, salt)
 user=await User.create({
    name:name,
    email:email,
    password:secPass
});
let data={
    user:{
        id:user.id
    }
}
error1=false
const authtoken=jwt.sign(data,JWT_SEC);
res.json({authtoken,error1})
}
catch(err)
{
    console.error('error',err)
    res.status(500).send("some error occured")
}

});

router.post('/login',[
    body("email","enter the valid email").isEmail(),
    body("password","enter the valid password").isLength({min:5})
],async(req,res)=>{
    let error1=false;
const error=validationResult(req);
const {email,password}=req.body;
if(!error.isEmpty())
{
return res.status(400).json({error:error.array()})
}
try
{
let user=await User.findOne({email:email});
if(!user)
{
    error1=true;
    return res.status(400).json({msg:'you have not created account',error1});
}
const passwordCompare=await bcrypt.compare(password,user.password);
if(!passwordCompare)
{
    error1=true;
    return res.status(400).json({msg:'invalid credentials',error1});

}
let data={
    user:{
        id:user.id
    }
}
error1=false
const authtoken=jwt.sign(data,JWT_SEC);
res.json({authtoken,error1})
}
catch(err)
{
    console.error('error',err)
    res.status(500).send("some error occured")
}

});
router.post('/fetchuser',fetchuser,async(req,res)=>{
try
{
 let userId=req.user.id;   
    let user=await User.findById(userId).select("-password");
    res.send(user);
}
catch(err)
{
    console.error('error',err)
    res.status(500).send("some error occured")
}

})
module.exports=router;
