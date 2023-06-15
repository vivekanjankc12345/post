const express=require("express");
const {blogmodel} =require("../Model/blog");
const blogrouter=express.Router();
blogrouter.get("/blogs",async(req,res)=>{
  try
  {
 let query=req.query;
 const blogget=await blogmodel.find(query);
 res.send(blogget)
  }
  catch (err)
  {
    res.send(err)
  }
})
blogrouter.post("/blogs",async(req,res)=>{
 const payload=req.body;
 console.log(payload)
 try{
          const blogpost=new blogmodel(payload);
          await blogpost.save();
          res.send({"data":"data added sucessfully"})
 }
 catch (err)
 {
  res.send(err)
 }
})
module.exports={
  blogrouter
}