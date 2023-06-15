const express=require("express");
const userrouter=express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {loginsignupmodel}=require("../Model/loginsignupmodel");
userrouter.post("/register",async(req,res)=>{
  const {Username,Avatar,Email,Password}=req.body;
  try
  {
    bcrypt.hash(Password,5, async(err, secure_password)=> {
      // Store hash in your password DB.
      if(err)
      {
        console.log(err)
        res.send("notregister")
      }
      else
      {
        let register=new loginsignupmodel({Username,Avatar,Email,Password:secure_password});
        await register.save();
        console.log(register);
        res.send("register")
      }
  });
  }
  catch (err)
  {
    console.log(err)
  }
})
userrouter.post("/login",async(req,res)=>{
  const {Email,Password}=req.body;
  
  try
  {
    const login=await loginsignupmodel.find({Email});
    if(login.length>0)
    {
      bcrypt.compare(Password,login[0].Password, function(err, result) {
        // result == true
        console.log(login)
        if(result)
        {
          const token= jwt.sign({ foo: 'bar' }, 'shhhhh');
          
            res.send({"msg":"Login Sucessfull","Token":token,"username":login[0].Username})
        }
        else
        {
          res.send({"msg":"login failed"})
        }
    });
    }
    else
    {
      console.log("wrong data");
    }

  }
  catch (err)
  {
    console.log(err)
  }
})
module.exports={
  userrouter
}