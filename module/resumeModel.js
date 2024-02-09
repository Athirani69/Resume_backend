const mongoose=require("mongoose")

const reSchema=new mongoose.Schema(
    {
        name:String,
        mob:String,
        email:String,
        address:String,
        pass:String
    }
)

module.exports=mongoose.model("resume",reSchema)