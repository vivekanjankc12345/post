const express=require("express");
const app=express();
var cors = require('cors')
app.use(cors({
  origin:"*"
}))
const {connection}=require("./Config/db");
const {userrouter}=require("./Router/user");
const { blogrouter } = require("./Router/blog");
const { auth } = require("./Middleware/Auth");
app.use(express.json());
app.use("/api",userrouter)
app.use(auth)
app.use("/api",blogrouter)
app.listen(8080,async()=>{
  try
  {
    await connection
    console.log("db is connected");
  }
  catch (err)
  {
    console.log(err)
  }
 console.log("8080 port no. working") 
})