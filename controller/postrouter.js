const express=require("express")
const postModel=require("../module/postModel")

const route=express.Router()

route.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"Success"
    })
})


route.get("/view",async(req,res)=>{
    let result=await postModel.find()
    res.json(result)
})

module.exports=route