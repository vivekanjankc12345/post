const mongoose=require("mongoose");
const loginsignupschema=mongoose.Schema({
  Username:String,
  Avatar:String,
  Email:String,
  Password:String
})
const loginsignupmodel=mongoose.model("usersignuplogin",loginsignupschema);
module.exports={
  loginsignupmodel
}