const express=require("express")
const resumeRoute=express.Router()
const rsModel=require("../module/resumeModel")
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

resumeRoute.post("/signup",async(req,res)=>{
  let{data}={"data":req.body}
  let pass=req.body.pass
  hashPasswordGenerator(pass).then(
    (hashedPassword)=>{
        console.log(hashedPassword)
        data.pass=hashedPassword
        console.log(data)
        let resobj=new rsModel(data)
        let result=resobj.save()
        res.json(
            {
                status:"added"
            }
        )
    }
  )
})

resumeRoute.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await rsModel.findOne({"email":email})
    if(!data)
    {
        return res.json({
            status:"invalid user"
        })
    }
    console.log(data)
          let dbPassword=data.pass
          let inputPassword=req.body.pass
          console.log(dbPassword)
          console.log(inputPassword)
          const match=await bcrypt.compare(inputPassword,dbPassword)
          {
            if(!match)
            {
                return res.json({
                    status:"invalid password"
                })
            }
          }
          res.json({
            status:"suscfuly login"
          })
})


module.exports=resumeRoute;