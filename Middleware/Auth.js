var jwt = require('jsonwebtoken');
const auth=(req,res,next)=>{
  const token=req.headers.authorization;
  console.log(token);
  if(token)
  {
    var decoded = jwt.verify(token, 'shhhhh');
    if(decoded)
    {
      next();
    }
    else{
      res.send("please login first")
    }
  }
  else
  {
    res.send("please login first")
  }
}
module.exports={
  auth
}