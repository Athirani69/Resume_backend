const mongoose=require("mongoose")

const reSchema=new mongoose.Schema(
    {
        name:String,
        mob:String,
        email:String,
        address:String
    }
)

module.exports=mongoose.model("resume",reSchema)