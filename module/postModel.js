const mongoose=require("mongoose")

const postSchema=new mongoose.Schema(
    {
        photo:String,
        name:{
            type:String,
            required:true
        },
        phoneno:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        pg:{
            type:String,
            required:true
        },
        ug:{
            type:String,
            required:true
        },
        plustwo:{
            type:String,
            required:true
        },
        project:{
            type:String,
            required:true
        },
        techskill:{
            type:String,
            required:true
        },

    }
)
module.exports=mongoose.model("resumeposts",postSchema)