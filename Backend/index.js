const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy

const app=express();
const port=6000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");


mongoose.connect(
    "mongodb+srv://gvikramram63:vikram@cluster0.a1bb657.mongodb.net/",
    {
    useNewUrlParser:true,
    useUnifiedTopology:true
    }
).then(()=>{
    console.log("\n\t Connected to MongoDB");
}).catch((error)=>{
    console.log("\n\t Error connecting to MongoDB",error)
});
app.listen(port,()=>{
    console.log("\n\t Server running on port : 6000  ")
})

app.get("/",(req,res)=>{
    res.send("\n\t backend working");
       
})



const User = require("./Models/user");
const Message = require("./Models/message");


app.post("/register",(req,res)=>{
    const {name,email,password,image} = req.body;
    console.log("\n\t Register got hit")

    const newUser = new User({name,email,password,image})
    newUser.save().then(()=>{
        res.status(200).json({message:"User registered Sucessfull"})
    }).catch((err)=>{
        console.log("Error registering user",err);
        res.status(500).json({message: "Error registering the user!"});
    })
})


app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(404).json({message:"Email and the password are required"})
    }

    User.findOne({email}).then((user)=>{
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        if(user.password !== password){
            return res.status(404).json({message:"Invalid password"})
        }
        const token = createToken(user._id);
        res.status(200).json({token})
    })
})



