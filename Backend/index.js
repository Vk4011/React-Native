const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const dotenv = require("dotenv")
const cors = require("cors");
const app=express();
const User = require("./Models/user");
const { configDotenv } = require("dotenv");

app.use(cors());
dotenv.config();
const port= process.env.PORT || 4000;

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
    console.log("\n\t Server running on port : 4000  ")
})

app.get("/",(req,res)=>{
    console.log("chat app main end point got hit");
    res.send("\n\t backend working");

       
})






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
 const createToken = (userId) =>{
    const payload = {
        userId: userId,
    }


 const token= jwt.sign(payload,"Q$",{expiresIn: "1h"});
 return token;
 }



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
        res.status(200).json({token});
    }).catch((errror)=>{
        console.log("\n\t Error in finding the user",error);
        res.status(500).json({message: "Internal server Error!"});
    });
})

//end point to access all the users except the user who's currently logged in !

app.get("/users/:userId",(req,res)=>{
    const loggedInUserId = req.params.userId;

    User.find({_id:{ $ne: loggedInUserId}}).then((users)=>{
        res.status(200).json(users)
    }).catch((error)=>{
        console.log("Error retriveing users",err);
        res.status(500).json({message:"Error retriveving users"})
    })
});

//end point to send a request  to a user

app.post("/friend-request",async(req,res)=>{
    const {currentUserId,selectedUserId} = req.body;
    try{

    }catch(error){
        res.sendStatus(500);
    }
})


