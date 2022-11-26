const express =require("express")
const cors =require("cors")
const mongoose = require("mongoose");

const app =express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1/myloginRegister")

     .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    name:String,
    emai:String,
    password:String
})

const User =new mongoose.model("User",userSchema)

    app.post("/login",(req,res)=>{
        res.send("MY API login")
    })


    app.post("/register",(req,res)=>{
       const{name,emai,password} = req.body
       User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registerd"})
        }
        else{
            const user =new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Sucessfully Registered"})
                }
            })
        }

       })
    })


    app.listen(9002,()=>{
        console.log("Be started at port 9002")
    })