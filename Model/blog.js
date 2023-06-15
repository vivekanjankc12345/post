const mongoose=require("mongoose");
const blogschema=mongoose.Schema({
  username:String,
  title:String,
  content:String,
  category:String,
  date:String,
  likes:Number,
  comments:String
})
const blogmodel=mongoose.model("Blog",blogschema);
module.exports={
  blogmodel
}