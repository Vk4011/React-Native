const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy

const app=express();
const port=8000;
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
    console.log("\n\t Server running on port 8000")
})