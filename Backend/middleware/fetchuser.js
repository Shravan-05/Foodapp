const jwt=require("jsonwebtoken");
const JWT_SEC='SHRAVAN$123456S';
const fetchuser=
(req,res,next)=>{
try
{
const token=req.header('token');
if(!token)
{
  return  res.status(401).send({error:'plzz authenticate using valid token'});
}
const data=jwt.verify(token,JWT_SEC);
req.user=data.user;
next();
}
catch(err)
{
    res.status(401).send({error:'plzz authenticate using valid token'});

}
}
module.exports=fetchuser;