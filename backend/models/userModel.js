const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
pic:{type:String,required:true,default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw07YU14JQLF0Sf0Q58Gurt2&ust=1681667305722000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCw8YO5rP4CFQAAAAAdAAAAABAE"},



},
{
    timestamp:true,
})
const User=mongoose.model("User",userSchema);
module.exports=User